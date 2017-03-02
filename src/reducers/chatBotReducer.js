import actionTypes from '../actions/const';
import presetMessages from '../sources/presetMessages';
import intentMessageMapping from '../sources/intentMessageMapping';

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
      let data = action.data;
      let intentMessage;
      let messages = [];

      if (data.result && data.result.action) {
        intentMessage = intentMessageMapping[data.result.action];
      }

      if (data.result && data.result.fulfillment && data.result.fulfillment.speech) {
        messages.push({
          senderId: 'bot',
          text: data.result.fulfillment.speech
        });
      }

      if (intentMessage) {
        messages.push({
          senderId: 'bot',
          text: intentMessage
        });
      }

      return Object.assign({},
        chatBotState,
        {
          messages: [...chatBotState.messages, ...messages],
          isTyping: false
        });
    case actionTypes.GET_MESSAGE_FAIL:
      let errorMessage = presetMessages.serverError;
      return Object.assign({},
        chatBotState,
        {
          messages: [...chatBotState.messages, {
            senderId: 'bot',
            text: errorMessage
          }],
          isTyping: false
        });
  }
  return chatBotState;
};

export default chatBotReducer;
