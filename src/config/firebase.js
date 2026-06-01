// src/config/firebase.js
import fetch from "node-fetch";

const projectId = process.env.FIREBASE_PROJECT_ID;
const apiKey = process.env.FIREBASE_API_KEY;

const baseUrl = `https://firestore.googleapis.com/v1/projects/${projectId}/databases/(default)/documents`;

export const firebase = {
  async getAll(collection) {
    const res = await fetch(`${baseUrl}/${collection}?key=${apiKey}`);
    return res.json();
  },

  async getById(collection, id) {
    const res = await fetch(`${baseUrl}/${collection}/${id}?key=${apiKey}`);
    return res.json();
  },

  async create(collection, data) {
    const res = await fetch(`${baseUrl}/${collection}?key=${apiKey}`, {
      method: "POST",
      body: JSON.stringify({ fields: toFirestore(data) }),
      headers: { "Content-Type": "application/json" }
    });
    return res.json();
  },

  async update(collection, id, data) {
    const res = await fetch(`${baseUrl}/${collection}/${id}?key=${apiKey}`, {
      method: "PATCH",
      body: JSON.stringify({ fields: toFirestore(data) }),
      headers: { "Content-Type": "application/json" }
    });
    return res.json();
  },

  async remove(collection, id) {
    const res = await fetch(`${baseUrl}/${collection}/${id}?key=${apiKey}`, {
      method: "DELETE"
    });
    return res.json();
  }
};

function toFirestore(obj) {
  const result = {};
  for (const key in obj) {
    const value = obj[key];
    if (typeof value === "string") result[key] = { stringValue: value };
    if (typeof value === "number") result[key] = { integerValue: value };
  }
  return result;
}
