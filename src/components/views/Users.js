import React, { Component } from 'react';
import axios from 'axios';

import { NavLink } from 'react-router-dom';

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

  handleUserClick = user => {
    console.log(user);
  };

  render() {
    return (
      <div>
        <div>
          {this.state.userData.map(user => (
            <div key={user.id}>
              <div>
                <img src={user.image} alt='' />
              </div>
              <div>{user.firstName}</div>
              <div>{user.lastName}</div>
              <NavLink
                to={`/profiles/${user.id}`}
                onClick={() => this.handleUserClick(user)}
              >
                View Profile
              </NavLink>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Users;
