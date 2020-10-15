// Common
import React, { useState, useRef } from 'react';
import cx from 'classnames';

// Components
// import FileList from '../../../FileList';

// Styles
import styles from './styles.module.scss';

const FileUploader = ({ onFileSelect, children }) => {
  const fileInput = useRef(null)

  const handleFileInput = (e) => {
    // handle validations
    onFileSelect(e.target.files[0])
  }

  return (
    <div className={styles['file-uploader']}>
      <input type="file" onChange={handleFileInput} />
        <button
          onClick={e => fileInput.current && fileInput.current.click()}
        >
          {children}
        </button>
    </div>
  )
}

const StepOne = ({ className }) => {
  const [file, setFile] = useState('');

  const handleChange = data => setFile(data)

  console.log(file)

  return (
    <div className={cx(className, styles['form'])}>
      <div className={styles['form_body']}>
        <h3 className={styles['form_title']}>Fill violation report form</h3>
        <span className={styles['form_subtitle']}>Fill violation report form</span>
        <div className={cx(styles['form_field'], styles['form_field-user'])}>
          <input
            type="text"
            className={styles['form_field-input']}
            placeholder="Your name"
          />
          <input
            type="email"
            className={styles['form_field-input']}
            placeholder="Your E-mail"
          />
        </div>
        <div className={cx(styles['form_field'], styles['form_field-attachments'])}>
          <FileUploader onFileSelect={handleChange}>
            Upload
          </FileUploader>
        </div>
      </div>
    </div>
  )
}

export default StepOne;
