import { Router } from 'express';
import { getAllTransactions } from '../db/transactions';

const router = Router();

/* GET ALL Transactions */
router.get('/transactions', async (req, res) => {
  const userId = req.body.userId;
  const transactions = await getAllTransactions(userId);
  res.status(200);
  res.json({
    transactions
  });
});


