import React from 'react';
import './landing.scss';

export default function Landing() {
  return (
    <div className="about">
      <h2>About the Lab 28 Notes App</h2>
      <p>This app is built on the React JavaScript library. It provides a &quot;notes&quot; resource and allows the user to create, edit, and delete notes. </p>
      <p>In this version, notes are stored in the browser&apos;s local storage so they&apos;ll persist between visits to the app. However their persistence should not be considered permanent, simply convenient (or not!).</p>
      <h3>Instructions for Use</h3>
      <ul>
        <li>
          The Notes Dashboard link takes you to the actual Notes app.
        </li>
        <li>
          From there you can view your saved notes (the default display), create a new note, or edit an existing note.
        </li>
        <li>
          To delete a note, simply Edit it then click the Delete button on the edit form.
        </li>
      </ul>
    </div>
  );
}
