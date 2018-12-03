import React, {Component} from 'react';
import shortid from 'shortid'
import PropTypes from 'prop-types';
import ErrorMsg from "./ErrorMsg";

export default class Input extends Component {
    constructor(props) {
        super(props);
        this.state = {
            valid: !props.required
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        const { value } = event.target;
        const { name, onChange, required} = this.props;
        const valid = required ? value.length > 0 : true;

        this.setState({value, valid});
        onChange(name, value, valid);
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
            maxLength
        } = this.props;

        const { valid } = this.state;
        const id = name + '-' + shortid.generate();

        let classes = ['contact-form__field', 'contact-form__field--text'];
        if (required) classes.push('required');
        if (className) classes.push(className);

        return (
            <div className={classes.join(' ')}>
                {type === 'textarea' ?
                    <textarea
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

                {error && !valid ? <ErrorMsg/> : null}
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
    maxLength: PropTypes.string
};

Input.defaultProps = {
    required: false,
    type: 'text',
    error: false,
    maxLength: "50"
};