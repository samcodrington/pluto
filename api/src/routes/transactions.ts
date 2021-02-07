import { Router } from 'express';
import { getAllTransactions } from '../db/transactions';

const router = Router();

/* GET ALL Transactions */
router.get('/transactions', async (req, res, next) => {
  const userId = req.body.userId;
  const transactions = getAllTransactions(userId);
  res.status(200);
  res.json({
    transactions
  });
});


