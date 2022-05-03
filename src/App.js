import "./App.css";
import React from "react";
/* import { Link } from "react-scroll"; */
import picture from "./Photos/TJ4.jpg";
import {Routes, Route, Link} from "react-router-dom";
import OurStory from "./ourstory";
import Schedule from "./schedule";
import WeddingInfo from "./weddinginfo";
import TravelInfo from "./travelinfo";
import RSVP from "./rsvp";

/* class App extends Component {
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
        <Routes>
            <Route path="ourstory" element={<OurStory/>}>Our Story</Route>
            <Route path="schedule" element={<Schedule/>}></Route>
            <Route path="weddinginfo" element={<WeddingInfo/>}></Route>
            <Route path="travelinfo" element={<TravelInfo/>}></Route>
            <Route path="rsvp" element={<RSVP/>}></Route>
          </Routes>
        <body>
          <ul className="row1">
            <ul className="grow">
              <nav>
              <Link to="/ourstory">OUR STORY</Link>
              </nav>
            </ul>
            <ul className="grow">
              <Link activeClass="active" to="Schedule" spy={true} smooth={true}>
                SCHEDULE
              </Link>
            </ul>
            <ul className="grow">
              <Link activeClass="active" to="RSVP" spy={true} smooth={true}>
                RSVP
              </Link>
            </ul>

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
          <img alt="test" src={picture} />
        </body>
      </div>
    );
  }
} */

function App(){
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="ourstory" element={<OurStory />} />
        <Route path="schedule" element={<Schedule />} />
        <Route path="weddinginfo" element={<WeddingInfo />} />
        <Route path="travelinfo" element={<TravelInfo />} />
        <Route path="rsvp" element={<RSVP />} />
      </Routes>
    </div>
  );
}

function Home() {
  return (
    <div>
      <body>
        <ul className="row1">
          <ul className="grow">
            <nav>
              <Link to="/ourstory">Our Story</Link>
            </nav>
          </ul>
          <ul className="grow">
            <nav>
              <Link to="/schedule">Schedule</Link>
            </nav>
          </ul>
          <ul className="grow">
            <nav>
              <Link to="/weddinginfo">Wedding Info</Link>
            </nav>
          </ul>
          <ul className="grow">
            <nav>
              <Link to="/travelinfo">Travel Info</Link>
            </nav>
          </ul>
          <ul className="grow">
            <nav>
              <Link to="/rsvp">RSVP</Link>
            </nav>
          </ul>
        </ul>
        <img alt="test" src={picture} />
      </body>
    </div>
  );
}

/* function OurStory(){
  <main>
    <h1>Our Story</h1>
  </main>
}

function Schedule(){
  <main>
    <h1>Our Story</h1>
  </main>
}
function WeddingInfo(){
  <main>
    <h1>Our Story</h1>
  </main>
}
function TravelInfo(){
  <main>
    <h1>Our Story</h1>
  </main>
}
function RSVP(){
  <main>
    <h1>Our Story</h1>
  </main>
} */

export default App;
