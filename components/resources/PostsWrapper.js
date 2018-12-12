import React, {Component} from 'react';
import Service from './service';
import PropTypes from 'prop-types';

const PostsWrapper = (WrappedComponent) => {

    class HOC extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                error: null,
                isLoaded: false,
                items: [],
                totals: 0
            };
        }

        getAdditionalData(items, totals) {

            let promises = [];

            items.forEach(item => {
                promises.push(Service.getPostMedia(item.featured_media));
                promises.push(Service.getAuthor(item.author));
            });

            Promise.all(promises).then(response => {
                items.map((item, i) => {
                    const {success: mediaSuccess, data: mediaData} = response[2 * i];
                    const {success: authorSuccess, data: authorData} = response[2 * i + 1];

                    if (mediaSuccess) item.imageUrl = mediaData.source_url;
                    if (authorSuccess) item.authorName = authorData.name;
                });

                this.setState({
                    items,
                    totals,
                    isLoaded: true,
                });

                this.props.onLoad();

            })
        }

        getCatalog() {
            const { page, onLoad, limit } = this.props;

            Service.getCatalogByPage(page)
                .then(response => {

                    const {success, error, totals} = response;
                    let {data} = response;

                    if (success) {
                        if (limit) {
                            data = data.reverse();
                            data.splice(0, data.length - limit);
                        }
                        this.getAdditionalData(data, totals);
                    } else {
                        this.setState({
                            isLoaded: true,
                            error
                        });

                        onLoad();
                    }
                })
        }

        componentDidMount() {
            this.getCatalog();
        }

        render() {
            const {error, items, totals} = this.state;
            const {page} = this.props;

            if (error) {
                return <div>{error}</div>
            } else {
                return <WrappedComponent page={page} totals={totals} items={items}/>
            }
        }
    }

    return HOC;
};

export default PostsWrapper;
