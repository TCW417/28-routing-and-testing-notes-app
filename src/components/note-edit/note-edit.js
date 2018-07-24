import React from 'react';
import PropTypes from 'prop-types';
import './note-edit.scss';

export default function NoteEdit(props) {
  return (
    <div className="note-edit">
      {props.mode === 'edit' ? <h2>Edit Note</h2> : <h2>Create a Note</h2>}
      <form onSubmit={props.handleSubmit}>
        <input type="text" name="title" value={props.note.title} placeholder="Title..." onChange={props.handleChange} />
        <textarea name="content" value={props.note.content} placeholder="Note text..." onChange={props.handleChange} />
        <div className="edit-buttons">
          <button type="submit">Save</button> 
          <button type="button" onClick={props.handleCancel}>Cancel</button>
        </div>
      </form>
    </div>
  );
}

NoteEdit.propTypes = {
  note: PropTypes.object,
  mode: PropTypes.string,
  handleChange: PropTypes.func,
  handleSubmit: PropTypes.func,
  handleCancel: PropTypes.func,
};
