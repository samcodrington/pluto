import { AnyAction } from "redux";
import {
  REQUEST_TRANSACTIONS,
  RECEIVE_TRANSACTIONS,
} from "../actions/transactions";

export default function (state: any, action: AnyAction) {
  switch (action.type) {
    case REQUEST_TRANSACTIONS:
    case RECEIVE_TRANSACTIONS:
      return Object.assign({}, { state, action });
    default:
      return Object.assign({}, state);
  }
}
