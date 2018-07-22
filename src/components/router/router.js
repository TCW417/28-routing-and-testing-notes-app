import React from 'react';
import { Route } from 'react-router-dom';
import Landing from '../landing/landing';
import Dashboard from '../dashboard/dashboard';

export default function Router() {
  return (
    <div className="router">
      <Route
        exact
        path="/"
        component={ Landing }
      />
      <Route
        exact
        path="/dashboard"
        component={ Dashboard }
      />
      <Route 
        exact
        path="/create"
        component={ (props) => {
          return (<Dashboard action="create" {...props} />);
        }}
      />
    </div>
  );
}
