import React, { Component } from 'react';
import './drive-register.css';

class DriveRegister extends Component {
    state={
        drivename:null,
        driveDOB:null,
        driveDate:null,
        drivestarttime:null,
        driveendtime:null,
        drivelocation:null,
        driveskill:null

    }
    handledrivenamechange = (e) =>
    {    
         e.preventDefault();
         this.setState( {
            drivename:e.target.value
            });
    }
    handledriveDatechange = (e) =>
    {    
         e.preventDefault();
         this.setState( {
            driveDate:e.target.value
            });
    }
    handledriveStarttimechange = (e) =>
    {    
         e.preventDefault();
         this.setState( {
            drivestarttime:e.target.value
            });
    }
    handledriveEndtimechange = (e) =>
    {    
         e.preventDefault();
         this.setState( {
            driveendtime:e.target.value
            });
    }
    handledriveLocationchange = (e) =>
    {    
         e.preventDefault();
         this.setState( {
            drivelocation:e.target.value
            });
    }
    handledriveSkillchange = (e) =>
    {    
         e.preventDefault();
         this.setState( {
            driveskill:e.target.value
            });
    }
    getdrivedetails=(e)=>
    {
        e.preventDefault();
        this.drivedata={
        dname:this.state.drivename,
        dDate:this.state.driveDate,
        dstarttime:this.state.drivestarttime,
        dendtime:this.state.driveendtime,
        dlocation:this.state.drivelocation,
        dskill:this.state.driveskill
        }
        // console.log(this.alldata);
        fetch('https://employeeid-6bd95.firebaseio.com/Drivedata.json',
        {
            method: 'POST',
            body: JSON.stringify( this.drivedata )
        })
        .then(function(res){ return res.json(); })
        
     }


    render() {
        return (
            <div>
           <br /> 
             <div className="main-container" id="main-con">
             <h1>Drive Registration</h1>
             <div className="grid" id="test">
                 <h3>iSlot </h3>
                 </div>
                 <div className="box">
                 <form>
                 <div class="form-groups1">
                 <label for="class">Name:</label>
                 <input className="input" onChange={this.handledrivenamechange} type="text" id="dname"/>
                    </div>
                    <br />
                    <br />
                    <div class="form-groups2">
                    <label for="class">Date:</label>
                    <input className="input" onChange={this.handledriveDatechange} type="text" id="iddate"/>
                    </div>
                    <br />
                    <br />
                    <div class="form-groups3">
                    <label for="class">Start Time:</label>
                    <input className="input" onChange={this.handledriveStarttimechange} type="text" id="dstarttime"/>
                    </div>
                    <br />
                    <br />
                    <div class="form-groups4">
                    <label for="class">End Time:</label>
                    <input className="input" onChange={this.handledriveEndtimechange} type="text" id="dendtime"/>
                    </div>
                    <br />
                    <br />
                    <div class="form-groups5">
                    <label for="class">Location:</label>
                    <input className="inputs" onChange={this.handledriveLocationchange} type="text" id="dlocation"/>
                    </div>
                    <br />
                    <br />
                    <div class="form-groups6">
                    <label for="class">Skills:</label>
                    <input className="inputs" onChange={this.handledriveSkillchange} type="text" id="dskill"/>
                    </div>
                    <br />
                    <br />
                    <div class="btns">
                     <button id="iclear">Reset</button>
                     <input type="button" id="iregister" onClick={this.getdrivedetails} value="Create Event"/>
                     </div>
                     </form>
                     </div>
            </div>
        </div>
        );
    }
}

export default DriveRegister;