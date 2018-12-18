import React, {Component} from 'react';
import shortid from 'shortid'
import PropTypes from 'prop-types';
import ErrorMsg from "../contact/ErrorMsg";

export default class Input extends Component {
    constructor(props) {
        super(props);
        this.state = {
            valid: !props.required,
            invalidType: 'required'
        };
        this.inputRef = React.createRef();
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        const { value } = event.target;
        const { name, onChange } = this.props;
        const valid = this.inputRef.current.validity.valid;

        this.setState({value, valid});
        if (!valid) this.getInvalidType(value);

        onChange(name, value, valid);
    }

    getInvalidType(value) {
        let res;

        const { type, required } = this.props;
        if(required && value.length === 0) {
            res = 'required'
        } else {
            res = type === 'email' ? 'email' : 'type'
        }

        this.setState({invalidType: res});
    }

    render() {
        const {
            required,
            name,
            className,
            type,
            error,
            value,
            id,
            maxLength,
            pattern
        } = this.props;

        const { valid, invalidType } = this.state;
        let _id = id ? id : name + '-' + shortid.generate(),
            _pattern = pattern ? pattern : null;

        return (
            <>
                {type === 'textarea' ?
                    <textarea
                        ref={this.inputRef}
                        id={_id}
                        name={name}
                        onChange={this.handleChange}
                        required={required}
                        value={value}
                        pattern={_pattern}
                        className={className}>
                    </textarea>
                    :
                    <input
                        ref={this.inputRef}
                        type={type}
                        id={_id}
                        name={name}
                        value={value}
                        pattern={_pattern}
                        onChange={this.handleChange}
                        required={required}
                        className={className}
                        maxLength={maxLength}
                    />
                }
                {error && !valid ? <ErrorMsg type={invalidType}/> : null}
            </>
        )
    }
}

Input.propTypes = {
    name: PropTypes.string.isRequired,
    required: PropTypes.bool,
    error:  PropTypes.bool,
    onChange: PropTypes.func,
    className: PropTypes.string,
    type: PropTypes.string,
    pattern: PropTypes.string,
    maxLength: PropTypes.string
};

Input.defaultProps = {
    required: false,
    type: 'text',
    error: false,
    maxLength: "50"
};