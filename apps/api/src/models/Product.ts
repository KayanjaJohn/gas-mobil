import mongoose, { Schema, Document } from 'mongoose';

export interface IProduct extends Document {
  name: string;
  description: string;
  price: number;
  stock: number;
  weight: number;
  type: string;
  createdAt: Date;
  updatedAt: Date;
}

const productSchema = new Schema<IProduct>(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    stock: { type: Number, required: true },
    weight: { type: Number, required: true },
    type: { type: String, required: true },
  },
  { timestamps: true }
);

export default mongoose.model<IProduct>('Product', productSchema);