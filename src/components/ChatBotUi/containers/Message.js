import React, {
  Component,
  PropTypes
} from 'react';

import Message from '../components/Message';

class MessageContainer extends Component {
  render() {
    return <Message {...this.props}>
      {this.props.children}
    </Message>;
  }
}

MessageContainer.propTypes = {
  senderId: PropTypes.string.isRequired,
  text: PropTypes.string,
  isPauseMessage: PropTypes.bool,
  isTyping: PropTypes.bool
};

export default MessageContainer;
