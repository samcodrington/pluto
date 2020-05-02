import { Transaction } from "../models/transactions";
import { Action } from "redux";
//Types
export const REQUEST_TRANSACTIONS = "REQUEST_TRANSACTIONS";
export const RECEIVE_TRANSACTIONS = "RECEIVE_TRANSACTIONS";

//Functions
export async function fetchTransactions() {
  return (
    dispatch: //TODO replace dispatch type definition with REDUX version
    (action: Action) => void
  ) => {
    dispatch(requestTransactions());
    // get parameters from the store
    let params = {};

    // request with params
    dispatch(receiveTransactions());
    const transactions: Transaction[] = [
      {
        transId: "34",
        type: "debit",
        amt: 45.0,
        userId: "testuser958",
      },
    ];

    return Promise.resolve(transactions);
  };
}

//Action Creators
const requestTransactions = function () : Action {
  return {
    type: REQUEST_TRANSACTIONS,
  };
};

const receiveTransactions = function (): Action {
  return {
    type: RECEIVE_TRANSACTIONS,
  };
};
