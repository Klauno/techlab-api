import admin from "firebase-admin";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const serviceAccountRaw = fs.readFileSync(
    path.join(__dirname, "serviceAccountKey.json"),
    "utf8"
);

const serviceAccount = JSON.parse(serviceAccountRaw);


serviceAccount.private_key = serviceAccount.private_key.replace(/\\n/g, '\n');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

export const db = admin.firestore();