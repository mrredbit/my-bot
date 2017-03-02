import 'whatwg-fetch';
import config from 'config';

export default {
  getMessageFromApiAi: function (myMessage) {
    const url = config.apiai.baseUrl + config.apiai.queryUrl;
    return fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + config.apiai.accessToken
      },
      body: JSON.stringify({query: myMessage, lang: 'en', sessionId: config.apiai.sessionId})
    });
  }
};
