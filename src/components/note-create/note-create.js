import React from 'react';
import PropTypes from 'prop-types';

export default class NoteCreate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      something: true,
    };
  }

  render() {
    console.log('!!!! NoteCreate props.edit:', this.props.edit);
    return (
      <div className="note-create">
        <h2>Note Editor</h2>
      </div>
    );
  }
}

NoteCreate.propTypes = {
  edit: PropTypes.string,
};
