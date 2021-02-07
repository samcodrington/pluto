import Transaction, {} from '../models/Transaction';

async function getAllTransactions(userId: string ): Promise<Transaction[]> {
  console.log('Fetch dummy transactions');
  return [
    {
      id: 'tewtabyay',
      userId: userId,
      date: new Date(2021, 1, 4),
      amount: -60,
      name: 'Party'
    },
    {
      id: 'tb626262',
      userId: userId,
      date: new Date(2021, 1, 6),
      amount: 1000,
      name: 'Paycheck'
    },
    {
      id: 't262727v',
      userId: userId,
      date: new Date(2021, 1, 1),
      amount: -800,
      name: 'Rent'
    }
  ]
}

export { getAllTransactions };