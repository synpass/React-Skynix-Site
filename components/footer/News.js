import React from 'react';
import news from './configs/news.config.json';
import NewsItem from "./NewsItem";

export default function News() {
    return (
        <div className='news'>
            <div className='news__grid'>
                {news.map(item => <NewsItem {...item} key={item.id}/>)}
            </div>
            <a href='/' className='news__link'>view all posts</a>
        </div>
    )
}