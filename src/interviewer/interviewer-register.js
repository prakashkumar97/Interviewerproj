import React, { Component } from 'react';
import './interviewer-register.css';


class InterviewRegister extends Component{
    state={
        interviewername:null,
        interviewermailid:null,
        interviewermobilenumber:null,
        interviewerLocation:null

    }
    handleinterviewernamechange = (e) =>
    {    
         e.preventDefault();
         this.setState( {
            interviewername:e.target.value
            });
    }
    handleinterviewermailidchange = (e) =>
    {    
         e.preventDefault();
         this.setState( {
            interviewermailid:e.target.value
            });
    }
    handleinterviewermobilenumberchange = (e) =>
    {    
         e.preventDefault();
         this.setState( {
            interviewermobilenumber:e.target.value
            });
    }
    handleinterviewerskillchange = (e) =>
    {    
         e.preventDefault();
         this.setState( {
            interviewerLocation:e.target.value
            });
    }
    getinterviewerdetails=(e)=>
    {
        e.preventDefault();
        this.interviewerdata={
        iname:this.state.interviewername,
        imailid:this.state.interviewermailid,
        imobileno:this.state.interviewermobilenumber,
        iskill:this.state.interviewerLocation
        }
        console.log(this.interviewerdata);
        fetch('https://employeeid-6bd95.firebaseio.com/interviewerdata.json',
        {
            method: 'POST',
            body: JSON.stringify( this.interviewerdata )
        })
        .then(function(res){ return res.json(); })
        
     }
    render(){
        return(
            <div>
           <br /> 
             <div className="main-container" id="main-con">
             <h1>Interviewer Registration</h1>
             <div className="grid" id="test">
                 <h3>iSlot </h3>
                 </div>
                 <div className="box">
                 <form>
                 <div class="form-group1">
                 <label for="class">Name:</label>
                 <input className="input" onChange={this.handleinterviewernamechange} type="text" id="iname"/>
                    </div>
                    <br />
                    <br />
                    <div class="form-group2">
                    <label for="class">email:</label>
                    <input className="input" onChange={this.handleinterviewermailidchange} type="text" id="iemail"/>
                    </div>
                    <br />
                    <br />
                    <div class="form-group3">
                    <label for="class">Mobile Number:</label>
                    <input className="input" onChange={this.handleinterviewermobilenumberchange} type="text" id="imobile"/>
                    </div>
                    <br />
                    <br />
                    <div class="form-group5">
                    <label for="class">Skills:</label>
                    <input className="input" onChange={this.handleinterviewerskillchange} type="text" id="iskill"/>
                    </div>
                    <br />
                    <br />
                    <div class="btn">
                     <button id="iclear">Clear</button>
                     <input type="button" id="iregister" onClick={this.getinterviewerdetails} value="InterviewerRegister"/>
                     </div>
                     </form>
                     </div>
            </div>
        </div>
        )
    }
}

export default InterviewRegister