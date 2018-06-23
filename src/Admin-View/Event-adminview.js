import React, { Component } from 'react';
import './Event-adminview.css';
import Event_adminheader from './Event-adminheader';
import { Link } from 'react-router-dom';
class Event_adminview extends Component {
    render() {
        return (
    <div>
        <div className="main-container" id="main-con">
            <Event_adminheader />
            <div className="linkposition">
            <Link to="/view">View</Link>
             <Link to="/update">Update</Link>
             </div>
           <div className="box {btn_class}">
                <div className="innerbox1">
                <div className="doubleinnerbox1">

                </div>
                <div className="svgcirclePosition">
                {/* <svg height="100" width="100">
                        <circle cx="50" cy="40" r="30" stroke="black" stroke-width="3" fill="yellow" />
                        Sorry, your browser does not support inline SVG.  
                </svg>  */}
                </div>
                </div>
                <div className="innerbox2">
                <div className="doubleinnerbox2">

                </div>
                </div>
                <div className="innerbox3">
                <div className="doubleinnerbox3">

                </div>
                </div>
            </div>
        </div>
    </div>
        );
    }
}

export default Event_adminview;