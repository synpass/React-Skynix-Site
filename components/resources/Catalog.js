import React, {Component} from 'react';
import Service from './service';
import CatalogArticle from "./CatalogArticle";
import LazyLoad from "../LazyLoad";
import PropTypes from 'prop-types';
import Pagination from "../Pagination";

export default class Catalog extends Component {

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
        const { page, onLoad } = this.props;

        Service.getCatalogByPage(page)
            .then(response => {

                const {success, data, error, totals} = response;

                if (success) {
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
            return (
                <LazyLoad className='catalog'>
                    {items.map(item => <CatalogArticle {...item} key={item.id}/>)}
                    <Pagination
                        current={page}
                        total={totals}
                        navLink='/resources'
                    />
                </LazyLoad>
            );
        }
    }
}

Catalog.propTypes = {
    onLoad: PropTypes.func,
    page: PropTypes.string
};

Catalog.defaultProps = {
    onLoad: () => {},
    page: '1'
};