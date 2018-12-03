import React from 'react';

export default function ErrorMsg(props) {
    return <span className='field-error'>{props.children}</span>
}

ErrorMsg.defaultProps = {
    children: 'This field is required'
};
