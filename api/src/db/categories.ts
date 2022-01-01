import { Category, CategoryModel } from '../models/Category';

async function getAllCategories(userId: string ): Promise<Category[]> {
  console.log('fetching categories');
  
  return [
    {
      userId: userId,
      monthYear: '2021-04',
      amount: -60,
      name: 'Party',
      budgetId: 'random',
      transactionIds: []
    },
    {
      userId: userId,
      monthYear: '2021-04',
      amount: 1000,
      name: 'Paycheck',
      budgetId: 'random',
      transactionIds: []
    },
    {
      userId: userId,
      monthYear: '2021-04',
      amount: -800,
      name: 'Rent',
      budgetId: 'random',
      transactionIds: []
    }
  ]
}

async function createCategory(userId: string, name: string, budgetId: string, transactionIds: [string?], amount?: number, notes?: string): Promise<void> {
  const category = new CategoryModel({
    userId,
    name,
    budgetId, 
    amount,
    notes,
    transactionIds,
  });
  try {
    await category.save();
  } catch (err) {
    console.error('Create Category failed with ' + err);
    throw new Error();
  }
}

export { getAllCategories, createCategory };