import React from 'react';
import { Route } from 'react-router-dom';
import Landing from '../landing/landing';
import Dashboard from '../dashboard/dashboard';
import NoteEdit from '../note-edit/note-edit';
import NoteCreate from '../note-create/note-create';

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
        path="/dashboard/edit"
        component={ NoteEdit }
      />
      <Route 
        exact
        path="/dashboard/create"
        component={ (props) => {
          return (<NoteCreate edit="false" {...props} />);
        }}
      />
    </div>
  );
}
