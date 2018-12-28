import React, {Component} from 'react';
import CatalogArticle from "./CatalogArticle";
import {Animated} from "react-animated-css";
import PropTypes from 'prop-types';
import Pagination from "../Pagination";
import PostsWrapper from './PostsWrapper';
import Service from "./service";


class Catalog extends Component {
    constructor(props) {
        super(props);
        // this.setState({isLoaded: false});

        this.animation = {
            animationIn: 'fadeInUp',
            animationInDelay: 600
        };
    }

    render() {
        return(
            <div className='catalog'>
                {this.props.items.map(item => <CatalogArticle {...item} key={item.id}/>)}
                <Pagination
                    current={this.props.page}
                    total={this.props.totals}
                    navLink='/resources'
                />
            </div>
        )
    }
}

// function CatalogWrapped(props) {
//     console.log(this.props)
//     console.log(props)
//     const {page, items, totals} = props;
//     const animation = {
//         animationIn: 'fadeInUp',
//         animationInDelay: 600
//     };
//     return (
//         <Animated {...animation}>
//             <div className='catalog'>
//                 {items.map(item => <CatalogArticle {...item} key={item.id}/>)}
//                 <Pagination
//                     current={page}
//                     total={totals}
//                     navLink='/resources'
//                 />
//             </div>
//         </Animated>
//     );
// }


// const Catalog = PostsWrapper(CatalogWrapped, { query });

export default Catalog;

Catalog.propTypes = {
    page: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
    items: PropTypes.array,
    totals: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ])
}