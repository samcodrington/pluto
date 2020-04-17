import { combineReducers, Reducer } from "redux";
import {
  REQUEST_TRANSACTIONS,
  RECEIVE_TRANSACTIONS,
} from "../actions/transactions";

import { Action } from "../actions/types";

const transactions: Reducer = (state: {}, action: Action) => {
  switch (action.type) {
    case REQUEST_TRANSACTIONS:
    case RECEIVE_TRANSACTIONS:
    default:
      return Object.assign({}, state);
  }
};

export default {
  transactions,
};
