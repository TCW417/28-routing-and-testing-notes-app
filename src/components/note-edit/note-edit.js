import React from 'react';
import PropTypes from 'prop-types';
import './note-edit.scss';

export default class NoteEdit extends React.Component {
  constructor(props) {
    super(props);
    if (props.mode === 'edit') {
      this.state = { ...props.note, editing: true, cancelled: false };
    } else {
      this.state = {
        title: '',
        content: '',
        editing: false,
        cancelled: false,
      };
    }
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.addNote(this.state);
  }

  handleCancel = () => {
    this.setState({ cancelled: true }, () => {
      this.props.addNote(this.state);
    });
  }

  render() {
    return (
      <div className="note-edit">
        {this.props.mode === 'edit' ? <h2>Note Editor</h2> : <h2>Create a Note</h2>}
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="title" value={this.state.title} placeholder="Title..." onChange={this.handleChange} />
          <textarea name="content" value={this.state.content} placeholder="Note text..." onChange={this.handleChange} />
          <div className="edit-buttons">
            <button type="submit">Save</button> 
            <button type="button" onClick={this.handleCancel}>Cancel</button>
          </div>
        </form>
      </div>
    );
  }
}

NoteEdit.propTypes = {
  note: PropTypes.object,
  addNote: PropTypes.func,
  mode: PropTypes.string,
};
