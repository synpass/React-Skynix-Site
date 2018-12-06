import React from 'react';
import PropTypes from 'prop-types';

export default function ErrorMsg(props) {
    const messages = {
        'required': 'This field is required',
        'type': 'Invalid format',
        'email': 'Email you entered is not valid',
        ...props.custom
    };

    return <span className='field-error'>{messages[props.type]}</span>
}
ErrorMsg.propTypes = {
    type: PropTypes.string,
    custom: PropTypes.object
};

ErrorMsg.defaultProps = {
    type: 'type',
    custom: {},
};