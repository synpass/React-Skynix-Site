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
            formId: '521',
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
    onLoad() {
        this.setState({show: true});
    }
    handleSubmit(event) {
        const formInputs = ['name', 'contact', 'project'];
        event.preventDefault();

        const isValid = formInputs.reduce((prev, curr) => {
            return prev && this.state[curr].isValid
        }, true) && this.state.agreement;


        if (isValid) {
            this.setState({...this.baseState});
            //let formData = new FormData();

            var data = new FormData(jQuery('.contact-form')[0]);

            //let formData1 = {};
            // formData.append( 'name', this.state.name.value);
            // formData.append( 'contact', this.state.contact.value);
            // formData.append( 'project', this.state.project.value ? this.state.project.value : null);
            //
            // formData1['name'] = this.state.name.value;
            // formData1['contact'] = this.state.contact.value;
            // formData1['project'] = this.state.project.value ? this.state.project.value : null;
            // formData1['attachment_1'] = '';
            // formData1['attachment_2'] = '';
            // formData1['attachment_3'] = '';

            // formData.append( 'attachment_1', '');
            // formData.append( 'attachment_2', '');
            // formData.append( 'attachment_3', '');
            // for(let i=0; i<this.state.files.length; i++){
            //     formData1[`attachment_${i+1}`] = this.state.files[i].data;
            //     formData.append( `attachment_${i+1}`, this.state.files[i].data);
            // }
            //  formData1['agreement'] = this.state.agreement;
            //  formData1['formId'] = this.state.formId;

            data.append( 'agreement', this.state.agreement);
            data.append( 'formId', this.state.formId);
            // console.log('this.state.formId ===========', this.state.formId);
            // console.log('formData1 ===========', formData1);

            Service.getInTouch(data)
            .then(response => {

                const {success, data, error} = response;

                if (success) {
                    console.log('2 success data ==', data);

                } else {
                    this.setState({
                        isLoaded: true,
                        error
                    });

                    this.onLoad();
                }
            })
        } else {
            console.log('No isValid');
            this.setState({showError: true});
        }
        console.log('2handleSubmit this.baseState', this.state);
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
