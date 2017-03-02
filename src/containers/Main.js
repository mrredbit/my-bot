import React, {
  Component,
  PropTypes
} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import Main from '../components/Main';
import chatBotAction from '../actions/chatBotAction';

class MainContainer extends Component {
  render() {
    return <Main {...this.props}/>;
  }
}

MainContainer.propTypes = {
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  const props = {
    isTyping: state.chatBotState.isTyping,
    messages: state.chatBotState.messages
  };
  return props;
}
function mapDispatchToProps(dispatch) {
  const actions = {
    sendMessage: chatBotAction.sendMessage
  };
  const actionMap = {actions: bindActionCreators(actions, dispatch)};
  return actionMap;
}
export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);
