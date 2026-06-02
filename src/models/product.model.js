import { db } from "../config/firebase.js";

const collection = db.collection("products");

export const ProductModel = {
  async getAll() {
    const snapshot = await collection.get();
    return snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
  },

  async getById(id) {
    const doc = await collection.doc(id).get();
    return doc.exists ? { id: doc.id, ...doc.data() } : null;
  },

  async create(product) {
    const doc = await collection.add(product);
    return { id: doc.id, ...product };
  },

  async update(id, product) {
    await collection.doc(id).update(product);
    return { id, ...product };
  },

  async remove(id) {
    await collection.doc(id).delete();
    return { id };
  }
};
