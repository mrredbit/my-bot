import style from '../styles/Main.css';
import React from 'react';
import MessageFeed from '../containers/MessageFeed';

class Main extends React.Component {
  sendMessage() {
    if (this.input.value) {
      this.props.sendMessage(this.input.value);
      this.input.value = '';
    }
  }

  onKeyPress(e) {
    if (e.key === 'Enter') {
      this.sendMessage();
    }
  }

  componentDidMount() {
    this.input.focus();
  }

  render() {
    return (
      <div className={style.index}>
        <div className={style.mainContainer}>
          <MessageFeed messages={this.props.messages} isTyping={this.props.isTyping}></MessageFeed>
          <div className={style.inputBar}>
            <button className={style.sendBtn}
                    onClick={this.sendMessage.bind(this)}/>
            <div className={style.inputContainer}>
              <input ref={(input)=> this.input = input}
                     type="text"
                     className={style.input}
                     placeholder="Type your message here"
                     onKeyPress={this.onKeyPress.bind(this)}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Main.defaultProps = {
  message: []
};

export default Main;
