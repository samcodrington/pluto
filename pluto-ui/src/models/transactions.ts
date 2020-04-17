export interface Transaction {
  transId: string;
  amt: number;
  type: TransactionType;
  cat?: string;
  userId: string;
  tags?: string[];
}

export type TransactionType = "credit" | "debit" | "transfer";
