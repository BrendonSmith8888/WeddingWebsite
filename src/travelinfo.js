import React, { Component } from "react";
import {Link} from "react-router-dom";

class TravelInfo extends Component{
    render(){
        return(
            <div id="travelinfo">
                <body>
                <nav><Link to="/">Home</Link></nav>
                    <h1>Travel Info</h1> 
                </body>
            </div>
        );
    }
}

export default TravelInfo;