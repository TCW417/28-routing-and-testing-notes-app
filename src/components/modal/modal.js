import React from 'react';
import PropTypes from 'prop-types';

import './modal.scss';

export default function Modal(props) {
  const modalClass = props.mode === 'edit' || props.mode === 'create' ? 'modal modal-display' : 'modal modal-hide';
  return (
    <div className={modalClass}>
      <div className="modal-main">
        {props.children}
      </div>
    </div>
  );
}

Modal.propTypes = {
  children: PropTypes.node,
  mode: PropTypes.string,
};
