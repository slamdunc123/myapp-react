import React, { Component } from 'react';
import './Menu.scss';

import { Switch, Route, NavLink } from 'react-router-dom';

import Info from '../views/Info';
import Posts from '../views/Posts';
import Activity from '../views/Activity';

class Menu extends Component {
  render() {
    const { id } = this.props;
    console.log(id);
    return (
      <div className='menu-container'>
        {/* <div>Menu</div> */}
        <NavLink to={`/profiles/${id}/info`}>Info</NavLink>
        <NavLink to={`/profiles/${id}/posts`}>Posts</NavLink>
        <NavLink to={`/profiles/${id}/activity`}>Activity</NavLink>
      </div>
    );
  }
}

export default Menu;
