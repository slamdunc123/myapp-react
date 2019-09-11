import React, { Component } from 'react';
import axios from 'axios';

class Info extends Component {
  state = {
    userData: []
  };
  componentDidMount() {
    const { id } = this.props.match.params;
    const url = `http://localhost:3100/users/${id}`;
    axios
      .get(url)
      .then(response => {
        this.setState({
          userData: response.data
        });
        console.log(this.state.userData);
      })
      .catch(error => {
        console.log(error);
      });
  }
  render() {
    console.log(this.state.userData);
    // const { userData } = this.state;
    const {
      image,
      firstName,
      lastName,
      phone,
      email,
      dob,
      //   location: { city = '', state = '' } = {}
      location = {}
    } = this.state.userData;
    const { city, state } = location;
    console.log(city);
    console.log(state);
    return (
      <div>
        <div>Info</div>
        <div>{firstName}</div>
        <div>{lastName}</div>
        <div>{phone}</div>
        <div>{email}</div>
        <div>{dob}</div>
        <div>{city}</div>
        <div>{state}</div>
      </div>
    );
  }
}

export default Info;
