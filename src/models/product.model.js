// src/models/product.model.js
import { db } from "../config/firebase.js";

const productsCollection = db.collection("products");

export const getAllProductsModel = async () => {
    const snapshot = await productsCollection.get();

    const products = [];
    snapshot.forEach((doc) => {
        products.push({
            id: doc.id,
            ...doc.data()
        });
    });

    return products;
};

export const getProductByIdModel = async (id) => {
    const docRef = productsCollection.doc(id);
    const docSnap = await docRef.get();

    if (!docSnap.exists) {
        return null;
    }

    return {
        id: docSnap.id,
        ...docSnap.data()
    };
};

export const createProductModel = async (product) => {
    const docRef = await productsCollection.add(product);

    return {
        id: docRef.id,
        ...product
    };
};

export const updateProductModel = async (id, updatedData) => {
    const docRef = productsCollection.doc(id);
    const docSnap = await docRef.get();

    if (!docSnap.exists) {
        return null;
    }

    await docRef.update(updatedData);

    return {
        id,
        ...docSnap.data(),
        ...updatedData
    };
};

export const deleteProductModel = async (id) => {
    const docRef = productsCollection.doc(id);
    const docSnap = await docRef.get();

    if (!docSnap.exists) {
        return null;
    }

    const deleted = {
        id: docSnap.id,
        ...docSnap.data()
    };

    await docRef.delete();

    return deleted;
};
