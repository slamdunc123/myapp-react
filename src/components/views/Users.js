import React, { Component } from 'react';
import axios from 'axios';

import './Users.scss';

import { NavLink } from 'react-router-dom';

import Test from './Test'

class Users extends Component {
  state = {
    userData: []
  };
  componentDidMount() {
    const url = 'http://localhost:3100/users';
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

  getAge(dob) {
    const dateNum = Number(new Date(Date.now()));
    // console.log(dateNum);
    const dobNum = Number(new Date(dob));
    // console.log(dobNum);
    const age = Math.floor((dateNum - dobNum) / 31556952000);
    return age;
  }

  handleUserClick = user => {
    console.log(user);
  };

  render() {
    return (
      <div className='users-container'>
        <Test />
        <h2>Users</h2>
        {this.state.userData.map(user => (
          <div key={user.id} className='user-block'>
            <div className='user-block__image'>
              <img src={user.image} alt='' />
            </div>
            <div className='user-block__info'>
              <div>{user.firstName}</div>
              <div>{user.lastName}</div>
              <div>{this.getAge(user.dob)} years old</div>
              <div>Lives in {user.location.city}</div>

              <NavLink
                activeClassName='activeRoute'
                to={`/profiles/${user.id}`}
                onClick={() => this.handleUserClick(user)}
              >
                {user.firstName}'s Profile
              </NavLink>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default Users;
