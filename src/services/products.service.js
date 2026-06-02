import { ProductModel } from "../models/product.model.js";

export const getAllProductsService = async () => {
  return await ProductModel.getAll();
};

export const getProductByIdService = async (id) => {
  return await ProductModel.getById(id);
};

export const createProductService = async (product) => {
  return await ProductModel.create(product);
};

export const updateProductService = async (id, product) => {
  return await ProductModel.update(id, product);
};

export const deleteProductService = async (id) => {
  return await ProductModel.remove(id);
};
