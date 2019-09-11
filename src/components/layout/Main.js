import React from 'react';
import { Switch, Route } from 'react-router-dom';

// view components
import Users from '../views/Users';
import Profiles from '../views/Profiles';

const Main = () => {
  return (
    <div>
      {/* Main */}
      <Switch>
        <Route exact path='/' component={Users} />
        <Route path='/profiles/:id' component={Profiles} />
      </Switch>
    </div>
  );
};

export default Main;
