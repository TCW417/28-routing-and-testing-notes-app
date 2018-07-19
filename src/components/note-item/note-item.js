import React from 'react';
// import { BrowserRouter, Route, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
// import NoteEdit from '../note-edit/note-edit';

import './note-item.scss';

export default function NoteItem(props) {
  console.log('$$$$ NoteItem, props.note', props.note);
  return (
    <div className="note-item">
      <h4>{props.note.title}</h4>
      <h5>{props.note.createdOn.toString()}</h5>
      <p>{props.note.content}</p>
    </div>
  );
}

NoteItem.propTypes = {
  note: PropTypes.object,
};
