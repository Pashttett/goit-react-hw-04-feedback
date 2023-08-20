import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NotificationMessage } from './Notification.styles';

class Notification extends Component {
  render() {
    const { message } = this.props;
    return <NotificationMessage>{message}</NotificationMessage>;
  }
}

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Notification;
