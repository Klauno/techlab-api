# 🚀 TechLab API

API REST desarrollada con Node.js y Express para la gestión de productos.  
Incluye autenticación mediante JWT, arquitectura por capas y conexión a Firebase Firestore mediante Firebase Admin SDK.  
También incluye un modelo local (`product.model.local.js`) para pruebas sin base de datos.

---

## 🧰 Tecnologías utilizadas

- Node.js  
- Express  
- Firebase Admin SDK (Firestore)  
- JSON Web Token (JWT)  
- Dotenv  
- CORS  
- Body Parser  

---

## 📁 Estructura del proyecto

techlab-api/
│
├── src/
│   ├── config/
│   │   ├── firebase.js
│   │   ├── firebaseAdmin.js
│   │   └── serviceAccountKey.json (IGNORADO en Git)
│   │
│   ├── controllers/
│   │   ├── auth.controller.js
│   │   └── products.controller.js
│   │
│   ├── middlewares/
│   │   └── auth.middleware.js
│   │
│   ├── models/
│   │   ├── product.model.js
│   │   └── product.model.local.js
│   │
│   ├── routes/
│   │   ├── auth.routes.js
│   │   └── products.routes.js
│   │
│   ├── services/
│   │   ├── auth.service.js
│   │   └── products.service.js
│   │
│   └── app.js
│
├── index.js
├── .env
├── .gitignore
├── package.json
└── README.md

---

## ⚙️ Instalación

git clone https://github.com/Klauno/techlab-api.git  
cd techlab-api  
npm install  

---

## 🔐 Variables de entorno

PORT=3000  
JWT_SECRET=techlab_secret_key  

⚠️ El backend usa Firebase Admin SDK, no requiere API KEY pública.

---

## 🔥 Configuración Firebase

src/config/serviceAccountKey.json

Agregar credenciales de Firebase Admin.

---

## ▶️ Ejecutar proyecto

npm start  

Servidor:
http://localhost:3000  

---

## ❤️ Estado del servidor

GET /up

{
  "status": "ok",
  "message": "Servidor activo"
}

---

## 🔑 Autenticación

POST /auth/login

{
  "username": "admin",
  "password": "123456"
}

Respuesta:

{
  "token": "jwt_token"
}

---

## 📦 Productos

⚠️ Requiere JWT

Authorization: Bearer TOKEN  

---

## GET /api/products

[
  {
    "id": "string",
    "name": "string",
    "price": 0,
    "stock": 0
  }
]

---

## GET /api/products/:id

{
  "id": "string",
  "name": "string",
  "price": 0,
  "stock": 0
}

---

## POST /api/products/create

{
  "name": "string",
  "price": 0,
  "stock": 0
}

---

## PUT /api/products/:id

{
  "name": "string",
  "price": 0,
  "stock": 0
}

---

## DELETE /api/products/:id

{
  "message": "Producto eliminado"
}

---

## 🧪 Modo local (sin Firestore)

product.model.local.js

Cambiar en service:

const ProductModel = require("../models/product.model.local");

---

## 🔒 Seguridad

- JWT authentication  
- Middleware de protección  
- Variables de entorno  
- Firebase Admin seguro  
- Firestore protegido  

---

## 🗄 Base de datos

products

{
  "name": "string",
  "price": 0,
  "stock": 0
}

---

## ⚙️ Funcionalidades

- Login JWT  
- CRUD productos  
- PATCH/PUT/DELETE  
- Arquitectura por capas  
- Firestore integrado  
- Modo local sin DB  
- Protección de rutas  

---

## 👨‍💻 Autor

Claudia Oliverio  
Proyecto backend para práctica con Node.js, Express y Firebase