/*
 * Overriding App component.
 * Now it is used only for defining should we show preloading intro animation (state rendered) or not
 * Feel free to remove code with animation  if you don't need this animation anymore
*/

import React from 'react'
import App, {Container} from 'next/app'
import Service from "../components/resources/service";
import {createStore} from "redux";
import {Provider} from "react-redux";
import withRedux from "next-redux-wrapper";

const reducer = (state = {animatedLoader: true, headerAnimation: true, posts: {}}, action) => {
    switch (action.type) {
        case 'animatedLoader':
            return {...state, animatedLoader: action.payload};
        case 'headerAnimation':
            return {...state, headerAnimation: action.payload};   
        case 'posts':
            return {...state, posts: action.payload};
        default:
            return state
    }
};

const makeStore = (initialState, options) => {
    return createStore(reducer, initialState);
};

class MyApp extends App {
    constructor(props) {
        super(props);

        this.state = {
            rendered: false,
            articleLoaded: false,
            showLoader: true
        }
    }

    static async getInitialProps({Component, router, ctx}) {
        let pageProps = {},
            limit = 0;

        if (Component.getInitialProps) {
            pageProps = await Component.getInitialProps(ctx)
            return {pageProps}
        } else if(!ctx.store.getState().posts.hasOwnProperty("newsItems")){ 
            await Service.getCatalogByPage(1)
                .then(async (response) => {

                    const {success, error, totals} = response;
                    let {data} = response;

                    if (success) {
                        if (limit) {
                            data = data.reverse();
                            data.splice(0, data.length - limit);
                        }

                        let promises = [];

                        data.forEach(item => {
                            promises.push(Service.getPostMedia(item.featured_media));
                            promises.push(Service.getAuthor(item.author));
                        });

                        await Promise.all(promises).then(response => {

                            data.map((item, i) => {
                                const {success: mediaSuccess, data: mediaData} = response[2 * i];
                                const {success: authorSuccess, data: authorData} = response[2 * i + 1];

                                if (mediaSuccess) item.imageUrl = mediaData.source_url;
                                if (authorSuccess) item.authorName = authorData.name;
                            });

                        })

                        data.forEach(news=>{
                            if(news.content) delete news.content
                            if(news.excerpt) delete news.excerpt
                        })

                        pageProps = {
                            newsItems: data,
                            newsTotals: totals
                        }
                        ctx.store.dispatch({type: 'posts', payload: pageProps})
                    }
                })
        }else{
            return ctx.store.getState().posts
        }

        return pageProps
    }

  componentDidMount() {
        this.setState({rendered: true});
        //Saves/gets to/from sessionStorage information about loader
        if (window.sessionStorage.getItem('loader')) {
          this.setState({showLoader: false})
        } else {
            window.sessionStorage.setItem('loader', true)
            this.setState({showLoader: false})
        } 
    }

    articleLoaded = () => this.setState({articleLoaded: true});

    _parseGetParams(gets) {
        let $_GET = {};
        let __GET = gets.split("&");
        for (let i = 0; i < __GET.length; i++) {
            let getVar = __GET[i].split("=");
            $_GET[getVar[0]] = typeof(getVar[1]) == "undefined" ? "" : getVar[1];
        }
        return $_GET;
    }


    render() {
        const {Component, pageProps, newsItems, store} = this.props

        return (
            <Container>
                <Provider store={store}>
                    <Component {...pageProps} newsItems={newsItems} {...this.state} />
                </Provider>
            </Container>
        )
    }
}

export default withRedux(makeStore)(MyApp);