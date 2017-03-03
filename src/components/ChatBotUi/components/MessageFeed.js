import style from '../styles/MessageFeed.css';
import React from 'react';
import Message from '../containers/Message';
import {Scrollbars} from 'react-custom-scrollbars';

class MessageFeed extends React.Component {
  componentDidMount() {
    this.scrollbar.scrollToBottom();
  }

  componentDidUpdate() {
    this.scrollbar.scrollToBottom();
  }

  render() {
    const messages = this.props.messages;
    const isTyping = this.props.isTyping;
    return (
      <Scrollbars ref={(scrollbar)=> this.scrollbar = scrollbar}
                  speed={1}
                  autoHide
                  autoHideTimeout={100}
                  autoHideDuration={500}
                  renderView={props => <div {...props} className={style.index}/>}
      >
        {
          messages.filter((message)=> !!message.text).map((message, index, arr) => {
            let isPauseMessage = (index >= arr.length - 1) || (message.senderId !== arr[index + 1].senderId); // last message or senderId is different in next message

            return <Message key={index}
                            senderId={message.senderId}
                            isPauseMessage={isPauseMessage}>
              {message.text}
            </Message>
          })
        }
        {
          isTyping && <Message senderId="bot" isTyping={isTyping}/>
        }
      </Scrollbars>
    );
  }
}

MessageFeed.defaultProps = {
  messages: [],
  isTypeing: false
};

export default MessageFeed;
