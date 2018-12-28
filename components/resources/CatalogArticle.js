import React, { Component } from 'react';
import ReactHtmlParser from 'react-html-parser';
import truncate from 'html-truncate';
import Moment from 'react-moment';
import Service from "./service";

export default class CatalogArticle extends Component {
    constructor(props) {
        super(props);
    }

    _openArticle(e){
        let params = window.location.origin +'/article?slug='+e;
        document.location.href = params;
    }
    render() {
        const { title, content, date,  authorName, imageUrl, slug} = this.props;
        const parsed = content.rendered.replace(/<[^>]*>/g, '');
        return (
            <a href={'/article?slug=' + slug} className='catalog-article' onClick={() => this._openArticle(slug)}>
                <div className='catalog-article__img' style={{backgroundImage: `url(${imageUrl})`}}/>
                <div className='catalog-article__flex'>
                    <div className='catalog-article__date'><Moment format="D MMM YYYY" withTitle>{date}</Moment></div>
                    <div className='catalog-article__author'>{authorName}</div>
                </div>
                <h4 className='catalog-article__title'>{ReactHtmlParser(title.rendered)}</h4>
                <p className='catalog-article__content'>{ReactHtmlParser(truncate(parsed, 90))}</p>
            </a>
        )
    }
}


