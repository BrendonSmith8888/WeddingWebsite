import './App.css';
import picture from './Test.jpg';
import React, { Component } from 'react';
import {Link} from 'react-scroll';

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
          <ul className='grow'><Link activeClass='active' to='HowWeMet' spy={true} smooth={true}>How We Met</Link></ul>
          <ul className='grow'><Link activeClass='active' to='Schedule' spy={true} smooth={true}>Schedule</Link></ul>
          <ul className='grow'><Link activeClass='active' to='WeddingInfo' spy={true} smooth={true}>Wedding Info</Link></ul>
          <ul className='grow'><Link activeClass='active' to='TravelInfo' spy={true} smooth={true}>Travel Info</Link></ul>
          <ul className='grow'><Link activeClass='active' to='RSPV' spy={true} smooth={true}>RSPV</Link></ul>
        </header>
        <div>

        </div>
        <body className='shadow-1'>  
          <img alt="test" src={picture} />
          {/* <h1>Welcome to Tracey and Jamie's Wedding</h1>   */}
          <h2 id='HowWeMet' style={{marginLeft:750}}>How We Met</h2>
          <p style={{marginLeft:750}}>Cayman Islands</p>
          <h2 id='Schedule' style={{marginLeft:750}}>Schedule</h2>
          <p style={{marginLeft:750}}>TBC</p>
          <h2 id='WeddingInfo' style={{marginRight:750}}>Wedding Info</h2>
          <p style={{marginRight:750}}>TBC</p>
          <h2 id='TravelInfo' style={{marginRight:750}}>Travel Info</h2>
          <p style={{marginRight:750}}>Somewhere in South Africa</p>
          <h2 id='RSPV' style={{marginRight:750}}>RSPV</h2>
          <p style={{marginRight:750}}>Reply Yes or No</p>
        </body>
      </div>
    );
  }
}

export default App;
