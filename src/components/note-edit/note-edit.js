import React from 'react';
import PropTypes from 'prop-types';

export default class NoteEdit extends React.Component {
  constructor(props) {
    super(props);
    console.log('//// NoteEdit props.mode', props.mode);
    console.log('//// props.note', props.note);
    if (props.mode === 'edit') {
      this.state = { ...props.note, editing: true };
    } else {
      this.state = {
        title: '',
        content: '',
        editing: false,
      };
    }
    console.log('//// this.state', this.state);
    // this.state = {
    //   content: props.mode !== 'create' ? props.note.content : '',
    //   title: props.mode !== 'create' ? props.note.title : '',
    //   _id: props.mode !== 'create' ? props.note._id : '',
    //   editing: props.mode === 'edit',
    // };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    console.log('ne hc name', name, value);
    this.setState({ [name]: value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log('!!!! sending addNote', this.state);
    this.props.addNote(this.state);
  }

  render() {
    console.log('!!!! NoteEdit, this.state', this.state);
    return (
      <div className="note-edit">
        {this.props.mode === 'edit' ? <h2>Note Editor</h2> : <h2>Create a Note</h2>}
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="title" value={this.state.title} onChange={this.handleChange} />
          <textarea name="content" value={this.state.content} onChange={this.handleChange} />
          <button type="submit">Save</button> 
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
