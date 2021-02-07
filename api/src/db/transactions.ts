import Transaction, {} from '../models/Transaction';

async function getAllTransactions(userId: string ): Promise<Transaction[]> {
  console.log('Fetch dummy transactions');
  return [
    {
      id: 'tewtabyay',
      userId: userId,
      date: new Date(2021, 1, 4)
    },
    {
      id: 'tb626262',
      userId: userId,
      date: new Date(2021, 1, 6)
    },
    {
      id: 't262727v',
      userId: userId,
      date: new Date(2021, 1, 8)
    }
  ]
}

export { getAllTransactions };