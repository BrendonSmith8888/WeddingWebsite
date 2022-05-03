import React, { Component } from "react";
import {Link} from "react-router-dom";

class Schedule extends Component{
    render(){
        return(
            <div id="schedule">
                <body>
                <nav><Link to="/">Home</Link></nav>
                    <h1>Schedule</h1> 
                </body>
            </div>
        );
    }
}

export default Schedule;