import React, {Component} from 'react';
import shortid from 'shortid'
import AttachmentFile from "./AttachmentFile";
import ErrorMsg from "./ErrorMsg";

export default class Attachments extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            sizeError: false,
            formatError: false,
        };

        this.fileInput = React.createRef();

        this.handleAddFile      = this.handleAddFile.bind(this);
        this.handleReaderLoaded = this.handleReaderLoaded.bind(this);
        this.handleRemoveFile   = this.handleRemoveFile.bind(this);
        this.handleFilesChange  = this.handleFilesChange.bind(this);
    }

    handleAddFile(e) {
        this.setState({
            formatError: false,
            sizeError: false
        });

        const file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0],
            reader = new FileReader();

        if (file) {
            const pattern = (/\.(PDF|doc|docx|txt|ppt|pptx|pdf|png|jpg|jpeg|sketch)$/i).test(file.name),
                checkSize = 10000000 > file.size;

            if(!pattern) {
                this.setState({formatError: true});
            } else if (!checkSize){
                this.setState({sizeError: true});
            } else {
                this.setState({loading: true});
                reader.onload = this.handleReaderLoaded.bind(this);
                //reader.readAsDataURL(file);
                reader.readAsBinaryString(file);
            }
        }
    }

    handleReaderLoaded(e) {
        const reader = e.target,
                name = this.fileInput.current.files[0].name;

        const joined = this.props.files.concat({
            data: reader.result,
            id: shortid.generate(),
            name
        });

        this.handleFilesChange(joined)
    }

    handleRemoveFile(id) {
        let copyFiles = [...this.props.files],
            index = this.getIndexById(id);

        copyFiles.splice(index, 1);

        this.handleFilesChange(copyFiles)
    }


    getIndexById(id) {
        /*
       * We use simple loop instead of forEach to decrease quantity
       * of iterations when we search id index
       */
        for (let i = 0; i < this.props.files.length; i++) {
            if(this.props.files[i].id === id) {
                return i;
            }
        }

        return null;
    }

    handleFilesChange(newFiles) {
        this.setState({loading: false});
        this.props.onChange(newFiles);
    }

    render() {
        const { loading, sizeError, formatError } = this.state;
        const { files } = this.props;
        const type = formatError ? 'format' : 'maxSize';

        const customErrors = {
            maxSize: 'Max size is 10 mb',
            format: 'Formats allowed: PDF, doc, docx, txt, ppt, pptx, pdf, png, jpg, jpeg, sketch.'
        };

        const filesList = <ul>
            {files.map(file =>
                <AttachmentFile
                    {...file}
                    key={file.id}
                    onRemove={this.handleRemoveFile}
                />
            )}
        </ul>;

        return (
            <div className='contact-form__field contact-form__field--attachment'>
                <div className='attachments'>
                    { files.length < 3 ?
                        <div className='attachments__submit'>
                            <input disabled={loading} type='file' id='fileInput' onChange={this.handleAddFile} ref={this.fileInput}/>
                            <label htmlFor='fileInput'>
                                <img src="/static/images/attach.svg"/>
                                <span>attachments</span>
                            </label>
                        </div>
                    : null }



                    {sizeError || formatError ? <ErrorMsg type={type} custom={customErrors}/> : null}

                    {files.length > 0 ? filesList : null}
                </div>
            </div>
        )
    }
}