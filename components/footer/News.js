import React, {Component} from 'react';
import NewsItem from "./NewsItem";
import PropTypes from 'prop-types';

class News extends Component{
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.onLoad();
    }

    render() {
        return (
            <div className='news'>
                <div className='news__grid'>
                    {this.props.items && this.props.items.length > 0 ? this.props.items.slice(0, this.props.limit).map(item => <NewsItem {...item}
                                                                                                   key={item.id}/> ) : null}
                </div>
                <a href='/resources' className='news__link'>view all posts</a>
            </div>
        );
    }
}

export default News;


News.propTypes = {
    items: PropTypes.array,
};