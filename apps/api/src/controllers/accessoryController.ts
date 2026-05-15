import { Request, Response } from 'express';
import Accessory from '../models/Accessory';

export const getAccessories = async (req: Request, res: Response) => {
  try {
    const { category } = req.query;
    const query = category ? { category } : {};
    const accessories = await Accessory.find(query);

    res.json({
      success: true,
      data: accessories,
    });
  } catch (error: any) {
    res.status(500).json({ success: false, error: error.message });
  }
};

export const getAccessoryById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const accessory = await Accessory.findById(id);

    if (!accessory) {
      return res.status(404).json({ success: false, error: 'Accessory not found' });
    }

    res.json({
      success: true,
      data: accessory,
    });
  } catch (error: any) {
    res.status(500).json({ success: false, error: error.message });
  }
};
