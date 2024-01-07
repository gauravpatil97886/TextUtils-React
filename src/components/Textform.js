import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function TextForm(props) {
  const [inputText, setInputText] = useState('Enter your text');

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const convertToUpperCase = () => {
    setInputText(inputText.toUpperCase());
  };

  const convertToLowerCase = () => {
    setInputText(inputText.toLowerCase());
    toast.success('Your text converted to lowercase', {
      position: 'top-center',
      autoClose: 2000,
      hideProgressBar: true,
    });
  };

  const copyTextToClipboard = () => {
    navigator.clipboard.writeText(inputText);
    toast.success('Text copied to clipboard!', {
      position: toast.POSITION.BOTTOM_CENTER,
      autoClose: 2000,
      hideProgressBar: true,
    });
  };

  const clearInputText = () => {
    setInputText('');
  };

  return (
    <div className="container mt-4">
      <h1 className="mb-4 text-center">{props.heading}</h1>
      <div className="mb-4">
        <textarea
          className="form-control p-3"
          value={inputText}
          id="mybox"
          rows="8"
          onChange={handleInputChange}
          placeholder="Enter your text here..."
          style={{
            backgroundColor: '#f7f7f7',
            border: '2px solid #ccc',
            borderRadius: '5px',
            fontWeight: 'bold',
            color: '#333',
            fontFamily: 'Arial, sans-serif',
          }}
          
        ></textarea>
      </div>
      <div className="d-flex justify-content-center">
        <button className="btn btn-primary me-2" onClick={convertToUpperCase}>
          Convert to Uppercase
        </button>
        <button className="btn btn-secondary me-2" onClick={convertToLowerCase}>
          Convert to Lowercase
        </button>
        <button className="btn btn-success me-2" onClick={copyTextToClipboard}>
          Copy Text
        </button>
        <button className="btn btn-danger me-2" onClick={clearInputText}>
          Clear Text
        </button>
      </div>
      <ToastContainer />
    </div>
  );
}
