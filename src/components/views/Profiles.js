import React, { Component } from 'react';
import axios from 'axios';
import './Profiles.scss';

import { NavLink, Switch, Route } from 'react-router-dom';

// view components

import Menu from './Menu';
import Info from './Info';
import Posts from './Posts';
import Activity from './Activity';

export default class Profiles extends Component {
  state = {
    userData: []
  };

  componentDidMount() {
    const { id } = this.props.match.params;

    // get all posts for a user id
    const urlUser = `http://localhost:3100/users/${id}`;
    axios
      .get(urlUser)
      .then(response => {
        this.setState({
          userData: response.data
        });
        // this.setState({
        //   postComments: response.data.filter(
        //     postComment => postComment.id === 23
        //   )
        // });
        console.log(this.state.userData);
        // console.log(this.state.postComments);
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    const { id } = this.props.match.params;
    console.log(id);

    const { image, firstName, lastName } = this.state.userData;

    return (
      <div>
        <div className='back-button'>
          <NavLink to='/'>Back</NavLink>
        </div>

        <h2>User {id} Profile</h2>
        <div class='profile-container'>
          <div class='profile-header'>
            <div class='profile-header__image'>
              <img src={image} />
            </div>
            <div class='profile-header__name'>
              {firstName} {lastName}
            </div>
          </div>
        </div>
        <Menu id={id} />
        <Switch>
          <Route path='/profiles/:id/info' component={Info} />
          <Route path='/profiles/:id/posts' component={Posts} />
          <Route path='/profiles/:id/activity' component={Activity} />
          {/* <Route path='/profiles/:id' component={Profiles} /> */}
        </Switch>
      </div>
    );
  }
}
