import React, { Component } from 'react';
import Event_adminheader from './Event-adminheader';
import { Link } from 'react-router-dom';
class Event_adminupdate extends Component {
    render() {
        return (
            <div>
                <div className="main-container" id="main-con">
                <Event_adminheader />
                <div className="linkposition">
                <Link to="/view">View</Link>
                 <Link to="/update">Update</Link>
                 </div>
                <div className="Updatetabbox">
                <div className="Updatetabinnerbox">
            <br/>
            <br/>
            <div className="container">
            <div className="row">
                <div className="col-sm">
                 <label>sudheer</label>
                 </div>
                <div className="col-sm">
                     2
                 </div>
                <div className="col-sm">
                    <button>Approve</button>
                 </div>
            </div>
  <div className="row">
    <div className="col-sm">
      <label>kumar</label>
    </div>
    <div className="col-sm">
      1
    </div>
    <div className="col-sm">
        <button>Approve</button>
    </div>
  </div>
  <div className="row">
    <div className="col-sm">
      <label>Antar</label>
    </div>
    <div className="col-sm">
      3
    </div>
    <div className="col-sm">
        <button>Approve</button>
    </div>
  </div>
  <div className="CloseEventbtn">
    <button>Close Event</button>
    </div>
</div>

 </div>
 </div>
 </div>
            </div>
        );
    }
}

export default Event_adminupdate;