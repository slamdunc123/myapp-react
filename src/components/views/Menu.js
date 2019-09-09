import React, { Component } from 'react';

import { Switch, Route, NavLink } from 'react-router-dom';

import Info from '../views/Info';
import Posts from '../views/Posts';
import Activity from '../views/Activity';

class Menu extends Component {
  render() {
    const { id } = this.props;
    console.log(id);
    return (
      <div>
        <div>Menu</div>
        <NavLink to={`/profiles/${id}/info`}>Info</NavLink>
        <NavLink to={`/profiles/${id}/posts`}>Posts</NavLink>
        <NavLink to={`/profiles/${id}/activity`}>Activity</NavLink>
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

export default Menu;
