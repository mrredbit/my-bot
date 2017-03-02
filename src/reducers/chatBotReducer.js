import actionTypes from '../actions/const';
import presetMessages from '../sources/presetMessages';

const initialChatBotState = {
  isTyping: false,
  messages: [
    {
      senderId: 'bot',
      text: presetMessages.greeting
    }
  ]
};
const chatBotReducer = function (chatBotState = initialChatBotState, action = null) {

  switch (action.type) {
    case actionTypes.SEND_MESSAGE:
      return Object.assign({},
        chatBotState,
        {
          messages: [...chatBotState.messages, {
            senderId: 'me',
            text: action.data
          }]
        });
    case actionTypes.GET_MESSAGE:
      return Object.assign({}, chatBotState, {isTyping: true});
    case actionTypes.GET_MESSAGE_SUCCESS:
      let messages = [];
      if (action.data.messages) {
        for (let message of action.data.messages) {
          messages.push({
            senderId: 'bot',
            text: message
          });
        }
      }
      return Object.assign({},
        chatBotState,
        {
          messages: [...chatBotState.messages, ...messages],
          isTyping: false
        });
    case actionTypes.GET_MESSAGE_FAIL:
      return Object.assign({},
        chatBotState,
        {
          messages: [...chatBotState.messages, {
            senderId: 'bot',
            text: action.data.message
          }],
          isTyping: false
        });
  }
  return chatBotState;
};

export default chatBotReducer;
