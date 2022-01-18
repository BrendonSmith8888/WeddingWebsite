import './App.css';
import picture from './Test.jpg';
import React, { Component } from 'react';
// import {Image} from 'react-native';

/* function App() {
  return (
    <div className='weddingMain' style={{ backgroundColor: '#5f9ea0'}}>
      <header>
        <p>Insert Top Navigation links</p>
      </header>
      <body>
        <img alt='test' src={picture} style={{height: 800, width: 800}} />
        <h1>Tracey and Jamie's Wedding</h1>
        <p>How We Met</p>
        <p>Schedule</p>
        <p>Wedding</p>
        <p>Travel Info</p>
        <p>Copyright</p>
      </body> 
    </div>
  );
} */

class App extends Component {
  render() {
    return (
      <div className='shadow-1'>
           <header className='shadow-1'>
          <ul className='grow'>How We Met</ul>
          <ul className='grow'>Schedule</ul>
          <ul className='grow'>Wedding Info</ul>
          <ul className='grow'>Travel Info</ul>
          <ul className='grow'>RSPV</ul>
        </header>
        <body className='shadow-1'>  
          <img alt="test" src={picture} />
          <h1>Welcome to Tracey and Jamie's Wedding</h1>    
          <h2>How We Met</h2>
          <p>Cayman Islands</p>
          <h2>Schedule</h2>
          <p>TBC</p>
          <h2>Wedding</h2>
          <p>TBC</p>
          <h2>Travel Info</h2>
          <p>Somewhere in South Africa</p>
          <h2>RSPV</h2>
          <p>Reply Yes or No</p>
        </body>
      </div>
    );
  }
}

export default App;
