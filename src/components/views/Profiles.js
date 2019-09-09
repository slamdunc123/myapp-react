import React, { Component } from 'react';

import { NavLink } from 'react-router-dom';

// view components

import Menu from '../views/Menu';

export default class Profiles extends Component {
  render() {
    const { id } = this.props.match.params;
    console.log(id);

    return (
      <div>
        <NavLink to='/'>Back</NavLink>
        User {id} Profile
        <Menu id={id} />
      </div>
    );
  }
}
