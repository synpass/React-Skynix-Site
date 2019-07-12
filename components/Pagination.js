import React from 'react';
import PropTypes from 'prop-types';
import { Link }  from '../routes';

export default function Pagination(props) {
    const { total, current, navLink, categories, tags } = props;
    const mapping = [];

    for (let i = 1; i <= total; i++) {
        mapping.push(i)
    }

    const pages = mapping.map(e => <Page tags={tags} categories={categories}navLink={navLink} page={e} isActive={e === +current} key={e}/>);

    return <div className='pagination'>{pages}</div>
}

function Page(props) {
    const { navLink, page, isActive, tags, categories } = props;

    let link = navLink + '?page=' + page;

    if (categories) {
        link  += `&categories=${categories}`
    }
    if (tags) {
        link  += `&tags=${tags}`
    }

    return (
        <Link href={link}>
            <a className={isActive ? 'active' : null}>
                {page}
            </a>
        </Link>
    )
}

Pagination.propTypes = {
    total: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
    current: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
    navLink: PropTypes.string,
    tags: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.array]),
    categories: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.array])
};

