import actionTypes from './const';
import dsMessage from '../sources/dsMessages';
import intentMessageMapping from '../sources/intentMessageMapping';
import presentMessages from '../sources/presetMessages';

import store from '../stores';

const chatBotAction = {
  sendMessage: function (data) {
    store.dispatch(chatBotAction.getMessage());

    dsMessage.getMessageFromApiAi(data)
      .then(function (response) {
        if (response.ok){
          return response.text()
        }
      })
      .then(function (text) {
        const data = JSON.parse(text);
        let intentMessage;
        let messages = [];

        if (data.result && data.result.action) {
          intentMessage = intentMessageMapping[data.result.action];
        }

        if (data.result && data.result.fulfillment && data.result.fulfillment.speech) {
          messages.push(data.result.fulfillment.speech);
        }

        if (intentMessage) {
          messages.push(intentMessage);
        }

        store.dispatch(chatBotAction.getMessageSuccess({
          messages: messages
        }));
      })
      .catch(function (ex) {
        store.dispatch(chatBotAction.getMessageFail({
          message: presentMessages.serverError
        }));
      });

    return {
      type: actionTypes.SEND_MESSAGE,
      data: data
    };
  },
  getMessage: function () {
    return {
      type: actionTypes.GET_MESSAGE
    };
  },
  getMessageSuccess: function (data) {
    return {
      type: actionTypes.GET_MESSAGE_SUCCESS,
      data: data
    };
  },
  getMessageFail: function (data) {
    return {
      type: actionTypes.GET_MESSAGE_FAIL,
      data: data
    };
  }

};

export default chatBotAction;
