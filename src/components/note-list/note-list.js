import React from 'react';
import PropTypes from 'prop-types';
import NoteItem from '../note-item/note-item';

export default class NoteList extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  handleEditNote = (event) => {
    event.preventDefault();
    console.log('eeee handleEditNote. event.target.name:', event.target.name);
    const mode = event.target.name === 'edit' ? 'edit' : 'delete';
    if (mode === 'delete') {
      console.log('ddd deleting note', event.target.id);
      return this.props.delNote(event.target.id);
    }
    return (
      this.props.editNote(event.target.id)
    );
  }

  render() {
    console.log('...NoteList props.notes', this.props.notes);
    return (
      this.props.notes.map((note) => {
        return (
          <div className="note-list" key={note._id}>
            <NoteItem note={note} />
            <button id={note._id} name="edit" onClick={this.handleEditNote}>Edit</button>
            <button id={note._id} name="delete" onClick={this.handleEditNote}>Delete</button>
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
