import "./App.css";
import React, { Component } from "react";
import { Link } from "react-scroll";
import picture from "./Photos/TJ4.jpg";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedOption: "Yes",
    };
  }
  handleFormSubmit = (formSubmitEvent) => {
    if (this.state.selectedOption === "Yes") {
      formSubmitEvent.preventDefault();
      alert("You are going to the wedding");
    } else {
      formSubmitEvent.preventDefault();
      alert("You are not going to the wedding");
    }
  };
  handleOptionChange = (changeEvent) => {
    this.setState({
      selectedOption: changeEvent.target.value,
    });
  };
  render() {
    return (
      <div>
        <body>
          <img alt="test" src={picture} />
            <ul className="row1">
              <ul className="grow">
                <Link
                  to="/ourstory"
                >
                  OUR STORY
                </Link>
              </ul>
              <ul className="grow">
                <Link
                  activeClass="active"
                  to="Schedule"
                  spy={true}
                  smooth={true}
                >
                  SCHEDULE
                </Link>
              </ul>
              <ul className="grow">
                <Link activeClass="active" to="RSVP" spy={true} smooth={true}>
                  RSVP
                </Link>
              </ul>
            </ul>
            <ul className="row2">
              <ul className="grow">
                <Link
                  activeClass="active"
                  to="WeddingInfo"
                  spy={true}
                  smooth={true}
                >
                  WEDDING INFO
                </Link>
              </ul>
              <ul className="grow">
                <Link
                  activeClass="active"
                  to="TravelInfo"
                  spy={true}
                  smooth={true}
                >
                  TRAVEL INFO
                </Link>
              </ul>
            </ul>
        </body>
      </div>
    );
  }
}

export default App;
