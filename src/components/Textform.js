import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Navbar.css';
import jsPDF from 'jspdf';


export default function TextForm(props) {
  const [inputText, setInputText] = useState('Enter your text');

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const convertToUpperCase = () => {
    setInputText(inputText.toUpperCase());
    toast.success('Your text converted to Uppercase', {
      position: 'top-center',
      autoClose: 2000,
      hideProgressBar: true,
    });
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
    toast.error('Your text is deleted', {
      position: 'top-center',
      autoClose: 2000,
      hideProgressBar: true,
    });
  };

  const downloadAsTxt = () => {
    const fileName = prompt('Enter the file name for the text file:', 'myTextFile');
    if (fileName !== null) {
      const element = document.createElement('a');
      const file = new Blob([inputText], { type: 'text/plain' });
      element.href = URL.createObjectURL(file);
      element.download = `${fileName}.txt`;
      document.body.appendChild(element);
      element.click();
      document.body.removeChild(element);
  
      toast.info('Text file downloaded!', {
        position: toast.POSITION.BOTTOM_RIGHT,
        autoClose: 2000,
        hideProgressBar: true,
      });
    }
  };
  
  const downloadAsPdf = () => {
    const fileName = prompt('Enter the file name for the PDF:', 'myPDFFile');
    if (fileName !== null) {
      const doc = new jsPDF();
      doc.text(inputText, 10, 10);
    
      // Save the PDF with the specified name
      doc.save(`${fileName}.pdf`);
    
      toast.info('PDF file downloaded!', {
        position: toast.POSITION.BOTTOM_RIGHT,
        autoClose: 2000,
        hideProgressBar: true,
      });
    }
  };
  

  // Calculating word count and character count
  const wordCount = inputText.split(' ').filter((word) => word !== '').length;
  const characterCount = inputText.length;

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

        <button className="btn btn-info me-2" onClick={downloadAsTxt}>
          Download as Text
        </button>
        <button className="btn btn-warning me-2" onClick={downloadAsPdf}>
          Download as PDF
        </button>

      </div>
      {/* Display text summary */}
      <div className="summary-container">
      <h2 className="summary-heading">Your Text Summary</h2>
      <p className="summary-text">
        {wordCount} Words and {characterCount} Characters
      </p>
      <p>
        {0.008 * wordCount} Minute to Read 
      </p>
      <div className="live-preview">
        <p>{inputText}</p>
      </div>  
    </div>
      <ToastContainer />
    </div>
  );
}
