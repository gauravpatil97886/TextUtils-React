import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import { MDBFooter } from 'mdb-react-ui-kit';

function App() {
  return (
    <div className="App">
      <Navbar title="TextUtils" />
      <div className="container">
        <Textform heading="Enter the text" />
      </div>
  
      <div className="push"></div>
      <MDBFooter bgColor='light' className='text-center text-lg-left'>
        <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
          &copy; {new Date().getFullYear()} Copyright:{' '}
          <a className='text-dark' href="/">Gaurav patil</a>
        </div>
      </MDBFooter>
    </div>
  );
}

export default App;
