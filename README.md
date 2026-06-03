# 🚀 TechLab API

API REST desarrollada con Node.js y Express para la gestión de productos.

Incluye:
* Autenticación mediante JWT.
* Arquitectura por capas.
* Integración con Firebase Firestore.
* Protección de rutas mediante middleware.
* Operaciones CRUD completas.
* Creación masiva de productos.
* Actualización parcial mediante PATCH.
* Health check del servidor.
* Preparada para despliegue en Vercel.

---

## 🧰 Tecnologías utilizadas
* Node.js
* Express
* Firebase Admin SDK
* Firestore
* JSON Web Token (JWT)
* Dotenv
* CORS

---

## 📁 Estructura del proyecto
techlab-api/
│
├── src/
│   ├── config/
│   │   └── firebase.js
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
├── vercel.json
├── package.json
├── .env
├── .gitignore
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
FIREBASE_PROJECT_ID=tu_project_id
FIREBASE_CLIENT_EMAIL=tu_client_email
FIREBASE_PRIVATE_KEY="tu_private_key"

---

## ▶️ Ejecutar proyecto
npm start

Servidor:
http://localhost:3000

---

## ❤️ Health Check
GET /up

Respuesta:
{
  "status": "ok",
  "message": "Servidor activo 🚀"
}

---

## 🔑 Autenticación
POST /auth/login

Body:
{
  "username": "admin",
  "password": "123456"
}

Respuesta:
{
  "message": "Login exitoso",
  "token": "jwt_token"
}

---

## 🔒 Protección de rutas
Authorization: Bearer TOKEN

---

## 📦 Productos

GET /api/products → obtener todos los productos

GET /api/products/:id → obtener producto por ID

POST /api/products/create → crear producto
{
  "name": "Producto",
  "price": 1000,
  "stock": 10
}

POST /api/products/bulk → crear múltiples productos
[
  {
    "name": "Producto 1",
    "price": 100,
    "stock": 10
  },
  {
    "name": "Producto 2",
    "price": 200,
    "stock": 5
  }
]

PUT /api/products/:id → actualizar completo

PATCH /api/products/:id → actualizar parcial
{
  "price": 1500
}

DELETE /api/products/:id → eliminar producto
{
  "message": "Producto eliminado correctamente"
}

---

## 🗄 Base de datos
Colección Firestore:
products

Documento:
{
  "name": "Producto",
  "price": 1000,
  "stock": 10
}

---

## ⚙️ Funcionalidades
* Login con JWT
* Middleware de autenticación
* CRUD completo
* Bulk insert
* PATCH updates
* Firebase Firestore
* Arquitectura por capas
* Manejo de errores
* Deploy en Vercel

---

## 🚨 Códigos HTTP
200 OK
201 Created
400 Bad Request
401 Unauthorized
403 Forbidden
404 Not Found
500 Internal Server Error

---

## 👨‍💻 Autor
Claudia Oliverio

Proyecto final de Backend desarrollado con Node.js, Express, JWT y Firebase Firestore para TechLab.
