import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Info from './Info';
import Posts from './Posts';
import Activity from './Activity';

const Profile = () => {
  return (
    <div>
      <Switch>
        <Route path='/profiles/:id/info' component={Info} />
        <Route path='/profiles/:id/posts' component={Posts} />
        <Route path='/profiles/:id/activity' component={Activity} />
        {/* <Route path='/profiles/:id' component={Profiles} /> */}
      </Switch>
    </div>
  );
};

export default Profile;
