import React, { Component } from 'react';
import axios from 'axios';

import './Info.scss'

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
      createdAt,
      //   location: { city = '', state = '' } = {}
      location = {}
    } = this.state.userData;
    const { city, state } = location;
    console.log(city);
    console.log(state);
    return (
      <div>
        <div className="info-details__list">
          {/* <div>Info</div> */}
          {/* <div>{firstName}</div>
        <div>{lastName}</div> */}
          <div><i class="fas fa-mobile-alt"></i> {phone}</div>
          <div><i class="fas fa-envelope"></i> {email}</div>
          <div><i class="fas fa-birthday-cake"></i> {dob}</div>
          <div><i class="fas fa-home"></i> {city}, {state}</div>
          <hr />
        </div>
        <div class="info_details__member-since">
          <div><i class="far fa-calendar-check"></i> {createdAt}</div>
        </div>
      </div>
    );
  }
}

export default Info;
