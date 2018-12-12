import React from 'react';
import PropTypes from 'prop-types';

export default function Pagination(props) {
    const { total, current, navLink } = props;
    const mapping = [];

    for (let i = 1; i <= total; i++) {
        mapping.push(i)
    }

    const pages = mapping.map(e => <Page navLink={navLink} page={e} isActive={e === +current}/>);

    return <div className='pagination'>{pages}</div>
}

function Page(props) {
    const { navLink, page, isActive } = props;
    const link = navLink + '?page=' + page;

    return <a href={link} className={isActive ? 'active' : null}>{page}</a>
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
    navLink: PropTypes.string
};

