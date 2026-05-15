import { Request, Response } from 'express';
import Wallet from '../models/Wallet';

export const getWallet = async (req: Request, res: Response) => {
  try {
    const userId = (req as any).userId;
    let wallet = await Wallet.findOne({ userId });

    if (!wallet) {
      wallet = new Wallet({ userId, balance: 0, transactions: [] });
      await wallet.save();
    }

    res.json({ success: true, data: wallet });
  } catch (error: any) {
    res.status(500).json({ success: false, error: error.message });
  }
};

export const addMoneyToWallet = async (req: Request, res: Response) => {
  try {
    const userId = (req as any).userId;
    const { amount } = req.body;

    let wallet = await Wallet.findOne({ userId });
    if (!wallet) {
      wallet = new Wallet({ userId, balance: 0, transactions: [] });
    }

    wallet.balance += amount;
    wallet.transactions.push({
      id: `TXN-${Date.now()}`,
      amount,
      type: 'credit',
      description: 'Money added to wallet',
      date: new Date(),
    });

    await wallet.save();
    res.json({ success: true, data: wallet });
  } catch (error: any) {
    res.status(500).json({ success: false, error: error.message });
  }
};
