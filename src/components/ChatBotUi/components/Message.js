import React from 'react';
import style from '../styles/Message.css';
import imgBot from '../images/bot.svg';
import nl2br from 'react-nl2br';

class Message extends React.Component {
  render() {
    const messageClass = style({
      message: true,
      myMessage: this.props.senderId === 'me',
      isTyping: this.props.isTyping
    });
    const senderProfileClass = style({
      senderProfile: true,
      myMessage: this.props.senderId === 'me',
      includeProfile: this.props.isPauseMessage || this.props.isTyping
    });
    const message = this.props.isTyping ? 'Robo Nyan is typing . . . ' : this.props.children;
    return (
      <div className={style.index}>
        <img className={senderProfileClass} src={imgBot}/>
        <div className={messageClass}>
          {nl2br(message)}
        </div>
      </div>
    );
  }
}

Message.defaultProps = {
  isPauseMessage: false,
  isTypeing: false
};

export default Message;
