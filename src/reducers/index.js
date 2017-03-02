import { combineReducers } from 'redux';
import chatBotReducer from './chatBotReducer.js'

const reducers = {
  chatBotState: chatBotReducer
};

module.exports = combineReducers(reducers);
