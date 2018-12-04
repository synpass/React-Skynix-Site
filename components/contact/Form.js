import React, {Component} from 'react';
import Spinner from '../Spinner';
import Attachments from "./Attachments";
import Input from "./Input";
import Agreement from "./Agreement";

export default class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: {
                value: '',
                isValid: false
            },
            contact: {
                value: '',
                isValid: false
            },
            project: {
                value: '',
                isValid: true
            },
            files: [],
            agreement: false,
            showError: false,
        };

        this.baseState = this.state;

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(name, value, isValid) {
        let state = {};
        state[name] = {value, isValid};
        this.setState(state);
    }

    handleAttachmentsChange = (files) => this.setState({files});

    handleAgreementsChange = () => this.setState({agreement: !this.state.agreement});

    handleSubmit(event) {
        const formInputs = ['name', 'contact', 'project'];
        event.preventDefault();

        const isValid = formInputs.reduce((prev, curr) => {
            return prev && this.state[curr].isValid
        }, true) && this.state.agreement;


        if (isValid) {
            this.setState({...this.baseState});
        } else {
            this.setState({showError: true});
        }
    }

    render() {
        const error = this.state.showError;
        const {name, project, agreement, contact, files} = this.state;

        return (
            <div className='contact-form__wrapper'>
                <form className='contact-form' onSubmit={this.handleSubmit} noValidate>
                    <div className='contact-form__body'>
                        <Input
                            error={error}
                            onChange={this.handleChange}
                            value={name.value}
                            name='name'
                            required={true}
                            label='How should we call you?'
                        />
                        <Input
                            value={contact.value}
                            error={error}
                            onChange={this.handleChange}
                            name='contact'
                            required={true}
                            label='How can we contact you?'
                        />
                        <Input
                            error={error}
                            onChange={this.handleChange}
                            value={project.value}
                            maxLength="2000"
                            name='project'
                            label='Tell us about your project'
                            type='textarea'
                        />

                        <Attachments onChange={this.handleAttachmentsChange} files={files}/>
                    </div>
                    <div className='contact-form__submit'>
                        <button type='submit'>
                            <img src='/static/images/ios-send.svg'/>
                            <span>send</span>
                        </button></div>
                </form>
                <Agreement error={error} value={agreement} onChange={this.handleAgreementsChange}/>
            </div>
        )
    }

}
