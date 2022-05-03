import React, { Component } from "react";
import {Link} from "react-router-dom";

class RSVP extends Component{
    render(){
        return(
            <div id="rsvp">
                <body>
                <nav><Link to="/">Home</Link></nav>
                    <h1>RSVP</h1> 
                </body>
            </div>
        );
    }
}

export default RSVP;