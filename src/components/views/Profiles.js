import React, { Component } from 'react';

import { NavLink } from 'react-router-dom';

export default class Profiles extends Component {
  render() {
    const { id, firstName, lastName } = this.props.match.params;
    console.log(id);

    return (
      <div>
        <NavLink to='/'>Back</NavLink>
        User {id} Profile
        {firstName}
        {lastName}
      </div>
    );
  }
}
