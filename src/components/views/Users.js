import React, { Component } from 'react';
import axios from 'axios';

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
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Users;
