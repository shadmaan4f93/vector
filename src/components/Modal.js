import React from 'react';
import PropTypes from 'prop-types';

class Modal extends React.Component {
  render() {
    if(!this.props.show) {
      return null;
    }
    return (
      <div className="backdrop">
        <div className="custome-modal">
          {this.props.children}
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  show: PropTypes.bool,
  children: PropTypes.node
};

export default Modal;