// src/models/product.model.js
import { firebase } from "../config/firebase.js";

const COLLECTION = "products";

export const ProductModel = {
  async getAll() {
    const data = await firebase.getAll(COLLECTION);
    return data.documents?.map(doc => ({
      id: doc.name.split("/").pop(),
      ...fromFirestore(doc.fields)
    })) || [];
  },

  async getById(id) {
    const doc = await firebase.getById(COLLECTION, id);
    return {
      id,
      ...fromFirestore(doc.fields)
    };
  },

  async create(product) {
    const doc = await firebase.create(COLLECTION, product);
    return {
      id: doc.name.split("/").pop(),
      ...product
    };
  },

  async update(id, product) {
    await firebase.update(COLLECTION, id, product);
    return { id, ...product };
  },

  async remove(id) {
    await firebase.remove(COLLECTION, id);
    return { message: "Producto eliminado" };
  }
};

function fromFirestore(fields) {
  if (!fields) return {};
  const obj = {};
  for (const key in fields) {
    const v = fields[key];
    if (v.stringValue !== undefined) obj[key] = v.stringValue;
    if (v.integerValue !== undefined) obj[key] = Number(v.integerValue);
  }
  return obj;
}
