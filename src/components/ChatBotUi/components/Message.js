import React from 'react';
import style from '../styles/Message.css';
import imgBot from '../images/bot.svg';

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
    return (
      <div className={style.index}>
        <img className={senderProfileClass} src={imgBot}/>
        <div className={messageClass}>
          {this.props.children}
          {this.props.isTyping && <div>Robo Nyan is typing . . . </div>}
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
