import React, {Component} from 'react';
import Spinner from '../Spinner';
import Attachments from "./Attachments";
import Input from "./Input";
import Agreement from "./Agreement";
import Service from '../resources/service';

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
            formId: '1252',
            isShowMask: false,
            errorForm: null,
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
    showMask(e){
        if(e && (/Error/i).test(e)){
            this.setState({'errorForm': `Error: ${e.response.status}`});
        }
        this.setState({'isShowMask': true});

        setTimeout(function () {
            this.setState({'isShowMask': false});
        }.bind(this), 5000);
    }
    handleSubmit(event) {
        const formInputs = ['name', 'contact', 'project'];
        event.preventDefault();

        const isValid = formInputs.reduce((prev, curr) => {
            return prev && this.state[curr].isValid
        }, true) && this.state.agreement;


        if (isValid) {
            this.setState({...this.baseState});
            let data = new FormData(jQuery('.contact-form')[0]);
            this.state.files.forEach(function (value, i) {
                data.append( `attachment_${i+1}`, value.data);
            });
            data.append( 'agreement', this.state.agreement);
            data.append( 'formId', this.state.formId);
            Service.getInTouch(data, this.showMask, this);
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
                    <div className={"contact-form__mask " + (this.state.isShowMask ? '' : 'disablemask ') + (this.state.errorForm === null ? '' : 'error')}>
                        {this.state.errorForm === null ? 'Thank you for your inquiry! Someone from our team will contact you shortly.' : this.state.errorForm}
                    </div>
                    <div className='contact-form__body'>
                        <Input
                            error={error}
                            onChange={this.handleChange}
                            value={name.value}
                            name='name'
                            required={true}
                            label='Your Name'
                        />
                        <Input
                            value={contact.value}
                            error={error}
                            onChange={this.handleChange}
                            name='contact'
                            required={true}
                            label='Your Email'
                            type='email'
                        />
                        <Input
                            error={error}
                            onChange={this.handleChange}
                            value={project.value}
                            maxLength="2000"
                            name='project'
                            label='Your Inquiry'
                            type='textarea'
                            parentClass='contact-form__field--big'
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
