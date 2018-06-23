import React, { Component } from 'react';
import './admin-register.css';
import ReactDOM from 'react-dom';
class AdminRegister extends Component{
    state={
        adminname:null,
        adminmailid:null,
        adminmobilenumber:null,
        adminLocation:null

    }
    handleadminnamechange = (e) =>
    {    
         e.preventDefault();
         this.setState( {
            adminname:e.target.value
            });
    }
    handleadminemailchange = (e) =>
    {    
         e.preventDefault();
         this.setState( {
            adminmailid:e.target.value
            });
    }
    handleadminmobilenumberchange = (e) =>
    {    
         e.preventDefault();
         this.setState( {
            adminmobilenumber:e.target.value
            });
    }
    handleadminlocationchange = (e) =>
    {    
         e.preventDefault();
         this.setState( {
            adminLocation:e.target.value
            });
    }
    getadmindetails=(e)=>
    {
        e.preventDefault();
        this.admindata={
        aname:this.state.adminname,
        amailid:this.state.adminmailid,
        amobileno:this.state.adminmobilenumber,
        alocation:this.state.adminLocation
        }
        // console.log(this.alldata);
        fetch('https://employeeid-6bd95.firebaseio.com/Admindata.json',
        {
            method: 'POST',
            body: JSON.stringify( this.admindata )
        })
        .then(function(res){ return res.json(); })
        
     }

    render(){
        return(
            <div>
           <br /> 
             <div className="main-container" id="main-con">
             <h1>Admin Registration</h1>
             <div className="grid" id="test">
                 <h3>iSlot</h3>
                 </div>
                 <div className="box">
                 <form>
                 <div className="form-group1">
                 <label htmlFor="aname">Name:</label>
                 <input className="input" onChange={this.handleadminnamechange} type="text" id="aname"/>
                    </div>
                    <br />
                    <br />
                    
                    <div className="form-group2">
                    <label htmlFor="aemail">email:</label>
                    <input className="input" onChange={this.handleadminemailchange} type="text" id="aemail"/>
                    </div>
                    <br />
                    <br />

                    <div className="form-group3">
                    <label htmlFor="amobile">Mobile Number:</label>
                    <input className="input" onChange={this.handleadminmobilenumberchange} type="text" id="amobile"/>
                    </div>
                    <br />
                    <br />

                    <div className="form-group4">
                    <label htmlFor="alocation">Location:</label>
                    <input className="input" onChange={this.handleadminlocationchange} type="text" id="alocation"/>
                    </div>
                    <br />
                    <br />

                    <div className="btn">
                     <button id="aclear">Clear</button>
                     <input type="button" id="aregister" onClick={this.getadmindetails} value="AdminRegister"/>
                     </div>
                     </form>
                     </div>
            </div>
        </div>
        )
    }
}

export default AdminRegister