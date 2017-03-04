import actionTypes from './const';
import dsMessage from '../sources/dsMessages';
import config from 'config';

import store from '../stores';

const chatBotAction = {
  sendMessage: function (data) {
    setTimeout(()=>store.dispatch(chatBotAction.getMessage()), config.bot.messageDelay);

    dsMessage.getMessageFromApiAi(data)
      .then(function (response) {
        if (response.ok) {
          return response.text()
        }
      })
      .then(function (text) {
        const data = JSON.parse(text);
        setTimeout(()=>store.dispatch(chatBotAction.getMessageSuccess(data)), config.bot.messageDelay);

      })
      .catch(function () {
        store.dispatch(chatBotAction.getMessageFail());
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
