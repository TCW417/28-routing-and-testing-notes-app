import React from 'react';
import uuid from 'uuid/v4';
import PropTypes from 'prop-types';

import NoteList from '../note-list/note-list';
import NoteEdit from '../note-edit/note-edit';
import './dashboard.scss';

export default class Dashboard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      allNotes: localStorage.allNotes ? JSON.parse(localStorage.allNotes) : [],
      note: {},
      error: false,
      action: props.action || null,
    };
  }

  addNote = (note) => {
    if (note.cancelled) {
      return this.setState({ action: null, cancelled: false });
    }
    if (note.title === '') {
      return this.setState({ error: true, action: null });
    }
    this.setState({ error: false });
    let { allNotes } = this.state;
    if (note.editing) {
      allNotes = this.state.allNotes.filter(n => n._id !== note._id);
    } else {
      note.createdOn = new Date();
      note._id = uuid();
    }
    note.editing = false;
    allNotes = allNotes.length ? [note].concat(allNotes) : [note];
    localStorage.setItem('allNotes', JSON.stringify(allNotes));
    return this.setState({ allNotes, action: null });
  }

  handleCreateNewNote = () => {
    return this.setState({ action: 'create' });
  }

  handleEditNote = (id) => {
    const note = this.state.allNotes.filter(n => n._id === id)[0];
    return this.setState({ note, action: 'edit' });
  }

  handleDeleteNote = (id) => {
    this.setState({ action: 'delete' });
    const allNotes = this.state.allNotes.filter((note) => {
      return note._id !== id;
    });
    localStorage.setItem('allNotes', JSON.stringify(allNotes));
    return this.setState({ allNotes, action: null });
  }

  render() {
    return (
      <div className="note-grid">
          {this.state.action !== null
            ? <NoteEdit mode={this.state.action} addNote={this.addNote} note={this.state.note}/>
            : <NoteList addNote={this.addNote} delNote={this.handleDeleteNote} editNote={this.handleEditNote} notes={this.state.allNotes} /> 
          }
      </div>
    );
  }
}

Dashboard.propTypes = {
  action: PropTypes.string,
};
