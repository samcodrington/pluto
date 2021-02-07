export default interface Transaction {
  id: string;
  date: Date;
  userId: string;
  amount: number;
  name: string;
}