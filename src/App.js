import "./App.css";
import picture from "./Test.jpg";
import React, { Component } from "react";
import { Link } from "react-scroll";

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      selectedOption: "Yes"
    }
  }
  handleFormSubmit = formSubmitEvent => {
    if(this.state.selectedOption==="Yes"){
      formSubmitEvent.preventDefault();
      alert("You are going to the event")
    }else{
      formSubmitEvent.preventDefault();
      alert("You are not going to the event")
    }
    
  }
  handleOptionChange = changeEvent => {
    this.setState({
      selectedOption: changeEvent.target.value
    })
  }
  render() {
    return (
      <div>
        <header>
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
        <body>
          <img alt="test" src={picture} />
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
          <form onSubmit={this.handleFormSubmit}>
            <ul>
              <label>Name:</label>
              <input style={{ marginLeft: 75 }} type={"text"} />
            </ul>
            <ul>
              <label>Email Address:</label>
              <input style={{ marginLeft: 15 }} type={"email"} />
            </ul>
            <ul>
              <label>Yes:</label>
              <input
                checked={this.state.selectedOption==="Yes"}
                name="rsvp"
                onChange={this.handleOptionChange}
                style={{ marginLeft: 15 }}
                type={"radio"}
                value="Yes"
              />
              <label style={{ marginLeft: 150 }}>No:</label>
              <input
                checked={this.state.selectedOption==="No"}
                name="rsvp"
                onChange={this.handleOptionChange}
                style={{ marginLeft: 15 }}
                type={"radio"}
                value="No"
              />
            </ul>
            <ul>
              <label>Dietary Options:</label>
              <select style={{ marginLeft: 5 }}>
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
