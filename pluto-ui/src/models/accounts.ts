export interface Account {
  acctId: string;
  type: ACCOUNT_TYPE;
}

export type ACCOUNT_TYPE = "credit" | "debit";
