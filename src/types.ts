// types.ts
import { Document, Schema, Model, model } from 'mongoose';

export interface IUser {
  _id: string;
  email: string;
  password: string;
  name: string;
  role: string;
}

export interface IProduct {
  _id: string;
  name: string;
  description: string;
  price: number;
  category: string;
}

export interface IOrder {
  _id: string;
  userId: string;
  productId: string;
  quantity: number;
  totalPrice: number;
  status: string;
}

export interface IReview {
  _id: string;
  productId: string;
  userId: string;
  rating: number;
  comment: string;
}

export interface IProductReview {
  _id: string;
  productId: string;
  rating: number;
  count: number;
}

export interface IOrderItem {
  _id: string;
  orderId: string;
  productId: string;
  quantity: number;
  totalPrice: number;
}

export interface IProductCategory {
  _id: string;
  name: string;
}

export interface IProductTag {
  _id: string;
  name: string;
}

export interface IProductImage {
  _id: string;
  productId: string;
  url: string;
}

export interface IProductVariation {
  _id: string;
  productId: string;
  name: string;
  price: number;
}

export interface IProductOption {
  _id: string;
  productId: string;
  name: string;
  type: string;
}

export interface IProductOptionValue {
  _id: string;
  optionId: string;
  value: string;
}

export interface IProductOptionValueImage {
  _id: string;
  optionValueId: string;
  url: string;
}

export interface IProductOptionValueImageSet {
  _id: string;
  optionValueId: string;
  images: string[];
}

export interface IProductOptionValueImageSetModel extends Document {
  optionValueId: string;
  images: string[];
}

export const ProductOptionValueImageSet = model<IProductOptionValueImageSetModel>('ProductOptionValueImageSet');

export interface IProductOptionValueImageSetSchema extends Schema {
  optionValueId: string;
  images: string[];
}

export const ProductOptionValueImageSetSchema = new Schema({
  optionValueId: { type: Schema.Types.ObjectId, ref: 'ProductOptionValue' },
  images: { type: [String], required: true },
});

export interface IProductOptionValueImageSetModel extends Model<IProductOptionValueImageSetModel> {}

export interface IProductOptionValueImageSet extends IProductOptionValueImageSetModel {}

export interface IProductOptionValueImageSetSchema extends IProductOptionValueImageSetSchema {}