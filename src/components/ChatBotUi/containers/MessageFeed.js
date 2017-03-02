import React, {
  Component,
  PropTypes
} from 'react';
import MessageFeed from '../components/MessageFeed';

class MessageFeedContainer extends Component {
  render() {
    return <MessageFeed {...this.props}/>;
  }
}

MessageFeedContainer.propTypes = {
  messages: PropTypes.array.isRequired,
  isTyping: PropTypes.bool.isRequired
};

export default MessageFeedContainer;
