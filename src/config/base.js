'use strict';
const sessionId = Math.random().toString(36).substring(7);
// Settings configured here will be merged into the final config object.
export default {
  apiai: {
    accessToken: '458fabd462cb4ef39da4e1e5b5781c6f',
    baseUrl: 'https://api.api.ai/v1/',
    queryUrl: 'query?v=20150910',
    sessionId: sessionId
  },
  bot: {
    name: 'Metallic Dave',
    messageDelay: 500,
    maxFailedRecogniseInput: 4
  }
}
