import React from 'react';
import PropTypes from 'prop-types';

import './note-item.scss';

export default function NoteItem(props) {
  return (
    <div className="note-item">
      <p className="note-title">{props.note.title}</p>
      <p className="note-date">{new Date(props.note.createdOn).toDateString()}</p>
      <div className="note-content">
        <p>{props.note.content}</p>
      </div>
    </div>
  );
}

NoteItem.propTypes = {
  note: PropTypes.object,
};
