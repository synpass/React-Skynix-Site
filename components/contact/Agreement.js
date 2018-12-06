import React, {Component} from 'react';
import shortid from 'shortid'
import PropTypes from 'prop-types';
import ErrorMsg from "./ErrorMsg";

export default class Agreement extends Component {
    render() {
        const id = 'agreement-' + shortid.generate();
        const {error, value, onChange} = this.props;
        return(
            <div className='agreement-wrapper'>
                <div className='agreement'>
                    <input type='checkbox' checked={value} id={id} onChange={onChange}/>
                    <label htmlFor={id} />
                    <span>I have read and accepted <a href='/'>Terms & Conditions</a> and <a href='/'>Privacy Policy</a></span>
                </div>
                {error && !value ?  <ErrorMsg type='required'/> : null}
            </div>
        );
    }
}

Agreement.propTypes = {
    error: PropTypes.bool,
    value: PropTypes.bool,
    onChange: PropTypes.func
};