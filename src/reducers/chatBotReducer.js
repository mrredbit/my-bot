import actionTypes from '../actions/const';
import presetMessages from '../sources/presetMessages';
import intentMessageMapping from '../sources/intentMessageMapping';
import config from 'config';

const initialChatBotState = {
  isTyping: false,
  failedRecogniseInputCount: 0,
  messages: [
    {
      senderId: 'bot',
      text: presetMessages.greeting
    }
  ]
};
const chatBotReducer = function (chatBotState = initialChatBotState, action = null) {
  let failedRecogniseInputCount;

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
      let messages = [];
      let intentMessage;
      let isUnableToRecogniseInput;

      if (data.result && data.result.action) {
        intentMessage = intentMessageMapping.map(data.result.action, data.result.parameters);
        if (data.result.action === 'input.unknown') {
          isUnableToRecogniseInput = true;
        }
      }

      if (intentMessage) {
        messages.push({
          senderId: 'bot',
          text: intentMessage
        });
      } else {
        // Check whether the fulfillment message contain anything first (user defined message, usually with well formatted script),
        // otherwise use fulfillment.speech
        if (data.result && data.result.fulfillment && data.result.fulfillment.messages) {
          messages.push(...data.result.fulfillment.messages
            .filter((message)=> {
              return message && message.speech;
            })
            .map((message) => {
              return {
                senderId: 'bot',
                text: message.speech
              }
            }));
        } else if (data.result && data.result.fulfillment && data.result.fulfillment.speech) {
          messages.push({
            senderId: 'bot',
            text: data.result.fulfillment.speech
          });
        }
      }


      if (messages.length === 0) {
        messages.push({
          senderId: 'bot',
          text: presetMessages.fallbackMessage
        });
        isUnableToRecogniseInput = true;
      }

      // Check if the input failed to be recognise too many times
      failedRecogniseInputCount = isUnableToRecogniseInput ? chatBotState.failedRecogniseInputCount + 1 : 0;

      if (failedRecogniseInputCount >= config.bot.maxFailedRecogniseInput) {
        messages.push({
          senderId: 'bot',
          text: presetMessages.failedTooManyTimes
        });
        failedRecogniseInputCount = 0;
      }

      return Object.assign({},
        chatBotState,
        {
          messages: [...chatBotState.messages, ...messages],
          isTyping: false,
          failedRecogniseInputCount: failedRecogniseInputCount
        });
    case actionTypes.GET_MESSAGE_FAIL:
      let errorMessage = presetMessages.serverError;

      failedRecogniseInputCount = chatBotState.failedRecogniseInputCount + 1;

      if (failedRecogniseInputCount >= config.bot.maxFailedRecogniseInput) {
        messages.push({
          senderId: 'bot',
          text: presetMessages.failedTooManyTimes
        });
        failedRecogniseInputCount = 0;
      }

      return Object.assign({},
        chatBotState,
        {
          messages: [...chatBotState.messages, {
            senderId: 'bot',
            text: errorMessage
          }],
          isTyping: false,
          failedRecogniseInputCount: failedRecogniseInputCount
        });
  }
  return chatBotState;
};

export default chatBotReducer;
