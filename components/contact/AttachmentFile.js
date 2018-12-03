import React from 'react';
import PropTypes from 'prop-types';
import { Animated } from "react-animated-css";

export default function AttachmentFile(props) {
    const {name, id, onRemove} = props;

    return (
        <li>
            <Animated className='attachments__file'>
                <img src='/static/images/file.svg'/>
                <span>{name}</span>
                <button type='button' onClick={onRemove.bind(null, id)}><img src='/static/images/trash-solid.svg'/></button>
            </Animated>
        </li>
    )
}

AttachmentFile.propTypes = {
    name: PropTypes.string,
    id: PropTypes.string.isRequired,
    onRemove: PropTypes.func.isRequired
};