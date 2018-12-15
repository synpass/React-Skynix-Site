import React, {Component} from 'react';
import Service from '../resources/service';

const Articles = (ArticlesComponent) => {
    class HOC extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                error: null,
                isLoaded: false,
                articleItems: [],
                totals: 0
            };
        }
        getAdditionalData(articleItems, totals) {

            let promises = [];

            articleItems.forEach(item => {
                promises.push(Service.getPostMedia(item.featured_media));
                promises.push(Service.getAuthor(item.author));
            });

            Promise.all(promises).then(response => {
                articleItems.map((item, i) => {
                    const {success: mediaSuccess, data: mediaData} = response[2 * i];
                    const {success: authorSuccess, data: authorData} = response[2 * i + 1];

                    if (mediaSuccess) item.imageUrl = mediaData.source_url;
                    if (authorSuccess){
                        item.authorName = authorData.name;
                        item.avatar = authorData.avatar_urls['96'];
                    }
                });
                this.setState({
                    articleItems: articleItems,
                    totals,
                    isLoaded: true,
                });
                this.props.onLoad();

            })
        }

        onLoad() {
            this.setState({show: true});
        }
        getArticle(){

            const { slug, onLoad, limit } = this.props;

            Service.getArticleBySlug(slug)
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
            this.getArticle();
        }

        render() {
            const {error, articleItems, totals} = this.state;

            if (error) {
                return <div>{error}</div>
            } else {
                return <ArticlesComponent  totals={totals} articleItems={articleItems}/>
            }
        }
    }

    return HOC;
};

export default Articles;
