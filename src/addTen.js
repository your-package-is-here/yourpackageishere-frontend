import React, { Component, Fragment } from "react";
import{Redirect} from 'react-router-dom';
import { Route, Switch } from "react-router-dom";
import api from'./helpers/environment.js';

class AddTen extends Component {
  constructor(props) {
    super(props);
    this.state = {
        firstname:'',
        lastname:'',
        email:'',
        aptnum:'',
        phonenum:'',
   successRedirect:false,
    }
    this.api = api();
}
  handleFormSubmit = (event) => {
    const target = event.target;
    const firstname = target.firstname;
    const lastname = target.lastname;
    const aptnum = target.aptnum;
    const phonenum = target.phonenum;
    const email = target.email;
    // const inputValue = target.value;
    this.setState({
      [firstname]: firstname.value,
      [lastname]: lastname.value,
      [aptnum]: aptnum.value,
      [phonenum]: phonenum.value,
      [email]: email.value,
    });
  }
    
  handleFormSubmit = (event) => {
    event.preventDefault();
      return fetch(`http://localhost:5000/api/tenant/add`, {
      method: 'POST',
        headers: {
              'Authorization': `Bearer ${localStorage.getItem('token')}`
            },
      body: JSON.stringify(this.state)

    })
      .then(response => {
        if (response.ok) {
        this.setState({successRedirect:true});
        }else {
          console.log('error');
        }
      })
    }

  render(){
    if (this.state.successRedirect === true) {
      return <Redirect to="/login" />;
    }
  return(
   <form onSubmit={this.handleFormSubmit}>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor="firstname">first name</label>
              <input name="firstname" id="firstname" className="form-control" onChange={this.handleInputChange} />
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="lastname">lastname</label>
              <input type="lastname" name="lastname" id="lastname" className="form-control" onChange={this.handleInputChange} />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor="email">Email</label>
              <input type="email" name="email" id="email" className="form-control" onChange={this.handleInputChange} />
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="aptnum">aptnum</label>
              <input name="aptnum" id="aptnum" className="form-control" onChange={this.handleInputChange} />
            </div>
          </div>
            <div className="form-group col-md-6">
                <label htmlFor="phonenum">Phonenum</label>
               <input name="phonenum" id="phonenum" className="form-control" onChange={this.handleInputChange} />
              </div>
          <button type="submit" className="btn btn-primary">Register</button>
        </form>
  )
  }
}


 export default AddTen;