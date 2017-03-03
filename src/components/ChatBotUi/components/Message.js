import React from 'react';
import style from '../styles/Message.css';
import imgBot from '../images/bot.svg';
import nl2br from 'react-nl2br';
import Linkify from 'react-linkify';

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
        <Linkify properties={{target: '_blank'}} className={messageClass}>
          {nl2br(message)}
        </Linkify>
      </div>
    );
  }
}

Message.defaultProps = {
  isPauseMessage: false,
  isTypeing: false
};

export default Message;
