export interface Transaction {
  transId: string;
  amt: number;
  type: TransactionType;
  cat?: string;
  userId: string;
  tags?: string[];
  acctId?: number;
}

export type TransactionType = "credit" | "debit" | "transfer";
