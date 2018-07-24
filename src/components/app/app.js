import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import Router from '../router/router';

import './app.scss';

export default function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <div>
          <header>
            <h1>Lab 28: Notes App</h1>
            <nav>
              <ul>
                <li><Link to="/">About</Link></li>
                <li><Link to="/dashboard">Notes</Link></li>
                <li className="create-note"><Link to="/create">New Note</Link></li>
              </ul>
            </nav>
          </header>
          <Router />
        </div>
      </BrowserRouter>
    </div>
  );
}
