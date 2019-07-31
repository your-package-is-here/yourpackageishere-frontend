import React, { Component, Fragment } from "react";
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
      isAuthenticated:false,
    }
    this.api = api();
}

  loadCurrentUser = () => {
    if (!localStorage.getItem('token')) {
      console.log('No token present.');
    }else{
      return fetch(`http://localhost:5000/api/tenant/add`, {
      method: 'POST',
        headers: {
              'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
      body: JSON.stringify(this.state)

    })
      .then(response => {
        if (response.ok) {
        console.log(response.json())
          return response.json();
        }

        else {
          console.log('error');
        }
      })

  }
  }
  }
 export default addTen;