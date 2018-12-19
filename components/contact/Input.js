import React, {Component} from 'react';
import shortid from 'shortid'
import PropTypes from 'prop-types';
import ErrorMsg from "./ErrorMsg";

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
            label,
            className,
            type,
            error,
            value,
            maxLength,
            parentClass
        } = this.props;

        const { valid, invalidType } = this.state;
        const id = name + '-' + shortid.generate();

        let classes = ['contact-form__field', 'contact-form__field--text'];
        if (required) classes.push('required');
        if (className) classes.push(className);
        if (parentClass) classes.push(parentClass);

        return (
            <div className={classes.join(' ')}>
                {type === 'textarea' ?
                    <textarea
                        ref={this.inputRef}
                        id={id}
                        name={name}
                        onChange={this.handleChange}
                        required={required}
                        value={value}
                        maxLength={maxLength}
                        className={value.length > 0 ? 'filled' : ''}>
                    </textarea>
                    :
                    <input
                        ref={this.inputRef}
                        type={type}
                        id={id}
                        name={name}
                        value={value}
                        maxLength={maxLength}
                        onChange={this.handleChange}
                        required={required}
                    />
                }
                <label htmlFor={id}>{label}</label>

                {error && !valid ? <ErrorMsg type={invalidType}/> : null}
            </div>
        )
    }
}

Input.propTypes = {
    name: PropTypes.string.isRequired,
    required: PropTypes.bool,
    error:  PropTypes.bool,
    label: PropTypes.string,
    onChange: PropTypes.func,
    className: PropTypes.string,
    type: PropTypes.string,
    maxLength: PropTypes.string,
};

Input.defaultProps = {
    required: false,
    type: 'text',
    error: false,
    maxLength: "50"
};