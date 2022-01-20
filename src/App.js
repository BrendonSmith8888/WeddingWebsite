import "./App.css";
import picture from "./Test.jpg";
import React, { Component } from "react";
import { Link } from "react-scroll";

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
  constructor(props) {
    super(props);
    this.state = { isGoing: true, value: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleChange2 = this.handleChange2.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleChange2(event) {
    this.setState({ value2: event.target.value2 });
  }

  handleInputChange(event) {
    const target = event.target;
    const value3 = target.type === 'checkbox' ? target.checked : target.value3;
    const name = target.name;

    this.setState({ [name]: value3 });
  }

  handleSubmit(event) {
    alert("You are going to the Wedding: " + this.state.value);
    event.preventDefault();
  }
  render() {
    return (
      <div className="shadow-1">
        <header className="shadow-1">
          <ul className="grow">
            <Link activeClass="active" to="HowWeMet" spy={true} smooth={true}>
              How We Met
            </Link>
          </ul>
          <ul className="grow">
            <Link activeClass="active" to="Schedule" spy={true} smooth={true}>
              Schedule
            </Link>
          </ul>
          <ul className="grow">
            <Link
              activeClass="active"
              to="WeddingInfo"
              spy={true}
              smooth={true}
            >
              Wedding Info
            </Link>
          </ul>
          <ul className="grow">
            <Link activeClass="active" to="TravelInfo" spy={true} smooth={true}>
              Travel Info
            </Link>
          </ul>
          <ul className="grow">
            <Link activeClass="active" to="RSVP" spy={true} smooth={true}>
              RSVP
            </Link>
          </ul>
        </header>
        <div></div>
        <body className="shadow-1">
          <img alt="test" src={picture} />
          {/* <h1>Welcome to Tracey and Jamie's Wedding</h1>   */}
          <h2 id="HowWeMet" style={{ marginLeft: 750 }}>
            How We Met
          </h2>
          <p style={{ marginLeft: 750 }}>Cayman Islands</p>
          <h2 id="Schedule" style={{ marginLeft: 750 }}>
            Schedule
          </h2>
          <p style={{ marginLeft: 750 }}>TBC</p>
          <h2 id="WeddingInfo" style={{ marginRight: 650 }}>
            Wedding Info
          </h2>
          <p style={{ marginRight: 650 }}>TBC</p>
          <h2 id="TravelInfo" style={{ marginTop: 75, marginRight: 650 }}>
            Travel Info
          </h2>
          <p style={{ marginRight: 650 }}>Somewhere in South Africa</p>
          <h2 id="RSVP" style={{ marginTop: 125, marginRight: 650 }}>
            RSVP
          </h2>
          <form onSubmit={this.handleSubmit}>
            <ul>
              <label>Name:</label>
              <input
                onChange={this.handleChange}
                style={{ marginLeft: 75 }}
                type={"text"}
                value={this.state.value}
              />
            </ul>
            <ul>
              <label>Email Address:</label>
              <input style={{ marginLeft: 15 }} type={"email"} />
            </ul>
            <ul>
              <label>Yes:</label>
              <input
                checked={this.state.isGoing}
                name="isGoing"
                onChange={this.handleInputChange}
                style={{ marginLeft: 15 }}
                type={"checkbox"}
              />
              <label style={{ marginLeft: 150 }}>No:</label>
              <input
                checked={!this.state.isGoing}
                name="isNotGoing"
                onChange={this.handleInputChange}
                style={{ marginLeft: 15 }}
                type={"checkbox"}
              />
            </ul>
            <ul>
              <label>Dietary Options:</label>
              <select
                style={{ marginLeft: 5 }}
                value={this.state.value2}
                onChange={this.handleChange2}
              >
                <option value="Normal">Normal</option>
                <option value="Halaal">Halaal</option>
                <option value="Vegetarian">Vegetarian</option>
                <option value="Vegan">Vegan</option>
                <option value="Carnivore">Carnivore</option>
              </select>
            </ul>
            <ul>
              <input
                style={{ marginLeft: 128 }}
                type={"submit"}
                value={"Submit"}
              />
            </ul>
          </form>
        </body>
      </div>
    );
  }
}

export default App;
