
import React, { Component } from "react";
import {Link} from "react-router-dom";
import picture from "./Photos/TJ3.jpg";
import "./OurStory.css";


class OurStory extends Component{
    render(){
        return(
            <div>
                <body>
                    <nav><Link to="/">Home</Link></nav>
                    <h1>Our Story</h1>
                    <p>Met in Cayman Islands</p>
                    <p>Jamie proposed at Mkhuze Game Lodge in December 2019</p>
                    <img alt="Test" src={picture}/>
                </body>
            </div>
        );
    }
}

export default OurStory;