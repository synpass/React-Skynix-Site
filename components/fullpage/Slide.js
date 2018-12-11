import React from 'react';
import PropTypes from 'prop-types';

export default function FullpageSlide(props) {
    const { id, template } = props;
    const slideId = 'slide-' + id;

    return <div id={slideId}>{template}</div>
}

FullpageSlide.propTypes = {
    id: PropTypes.number.isRequired,
    template: PropTypes.element.isRequired
};