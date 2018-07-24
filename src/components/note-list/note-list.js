import React from 'react';
import PropTypes from 'prop-types';
import NoteItem from '../note-item/note-item';
import './note-list.scss';

export default class NoteList extends React.Component {
  handleEditNote = (event) => {
    event.preventDefault();
    const mode = event.target.name === 'edit' ? 'edit' : 'delete';
    if (mode === 'delete') {
      return this.props.delNote(event.target.id);
    }
    return (
      this.props.editNote(event.target.id)
    );
  }

  render() {
    return (
      this.props.notes.map((note) => {
        return (
          <div className="note-list" key={note._id}>
            {this.children}
            <NoteItem note={note}/>
            <div className="note-buttons">
              <button id={note._id} name="edit" onClick={this.handleEditNote}>Edit</button>
              <button id={note._id} name="delete" onClick={this.handleEditNote}>Delete</button>
            </div>
          </div>
        );
      })
    );
  }
}

NoteList.propTypes = {
  addNote: PropTypes.func,
  notes: PropTypes.array,
  delNote: PropTypes.func,
  editNote: PropTypes.func,
};
