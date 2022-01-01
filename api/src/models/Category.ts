import mongoose, {Schema} from 'mongoose';

interface Category {
  userId: string;
  name: string;
  monthYear: string; // YYYY-MM
  amount?: number;
  notes?: string;
  budgetId: string;
  transactionIds: [string?];
}

const schema = new Schema({
  userId: { type: String, required: true },
  name: { type: String, required: true},
  amount: { type: Number },
  notes: { type: String},
  budgetId: { type: String},
  transactionIds: { type: [String]}
});

const CategoryModel = mongoose.model<Category>('Category', schema);


export { Category, CategoryModel };
