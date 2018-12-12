import React from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid'

export default function GoogleStars(props) {
    const { value } = props;
    const base = new Array(5).fill(0);
    const starList =  base.map((e, i) => <li key={shortid.generate()} className={+value < i + 1 ? 'empty' : ''}/>);

    return <div className='google-review-stars'><span>{value}</span>{starList}</div>;
}

GoogleStars.propTypes = {
    value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ])
};
