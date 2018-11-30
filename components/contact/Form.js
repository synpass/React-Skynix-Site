import React, {Component} from 'react';
import Spinner from '../Spinner';

export default class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            contact: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        let state = {};
        state[event.target.name] = event.target.value;
        this.setState(state);
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <form className='contact-form'>
                <div className='contact-form__body'>
                    <div className='contact-form__field required'>
                        <input type='text' name='name' value={this.state.name} onChange={this.handleChange} required/>
                        <label>How should we call you?</label>
                    </div>
                    <div className='contact-form__field required'>
                        <input type='text' name='contact' value={this.state.contact} onChange={this.handleChange} required/>
                        <label>How can we contact you?</label>
                    </div>
                    <div className='contact-form__field'>
                        <textarea/>
                        <label>Tell us about your project</label>
                    </div>
                    <div className='contact-form__field'>
                    </div>

                </div>
                <div className='contact-form__submit'><button type='submit'>submit</button></div>
            </form>
        )
    }

}
