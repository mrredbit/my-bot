import 'normalize.css/normalize.css';
import '../styles/global/App.css';

import React from 'react';
import ChatBotUi from './ChatBotUi';
import style from '../styles/Main.css';

class MainComponent extends React.Component {
  render() {
    return (
      <div className={style.index}>
        <ChatBotUi messages={this.props.messages}
                   isTyping={this.props.isTyping}
                   sendMessage={this.props.actions.sendMessage}/>
      </div>
    );
  }
}

MainComponent.defaultProps = {};

export default MainComponent;
