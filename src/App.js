import './App.css';
import picture from "./Test.jpg";
import React, { Component } from "react";

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
      <div>
        <header>
          <ul>How We Met</ul>
          <ul>Schedule</ul>
          <ul>Wedding Info</ul>
          <ul>Travel Info</ul>
          <ul>RSPV</ul>
        </header>
        <body> 
          <img alt="test" src={picture} style={{ height: 800, width: 800 }} />
          <h1>Tracey and Jamie's Wedding</h1>    
          <p>How We Met</p>
          <p>Schedule</p>
          <p>Wedding</p>
          <p>Travel Info</p>
          <p>RSPV</p>
        </body>
      </div>
    );
  }
}

export default App;
