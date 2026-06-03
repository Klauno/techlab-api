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
* Body Parser

---

## 📁 Estructura del proyecto

```text
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
├── .env
├── .gitignore
├── package.json
├── vercel.json
└── README.md
```

---

## ⚙️ Instalación

```bash
git clone https://github.com/Klauno/techlab-api.git

cd techlab-api

npm install
```

---

## 🔐 Variables de entorno

Crear un archivo `.env`

```env
PORT=3000

JWT_SECRET=techlab_secret_key

FIREBASE_PROJECT_ID=tu_project_id
FIREBASE_CLIENT_EMAIL=tu_client_email
FIREBASE_PRIVATE_KEY="tu_private_key"
```

---

## ▶️ Ejecutar proyecto

```bash
npm start
```

Servidor:

```text
http://localhost:3000
```

---

## ❤️ Estado del servidor

### GET /up

Respuesta:

```json
{
  "status": "ok",
  "message": "Servidor activo"
}
```

---

## 🔑 Autenticación

### POST /auth/login

Body:

```json
{
  "username": "admin",
  "password": "123456"
}
```

Respuesta:

```json
{
  "message": "Login exitoso",
  "token": "jwt_token"
}
```

---

## 🔒 Protección de rutas

Todas las rutas de productos requieren JWT.

Header:

```text
Authorization: Bearer TOKEN
```

---

## 📦 Productos

### GET /api/products

Obtiene todos los productos.

---

### GET /api/products/:id

Obtiene un producto por ID.

---

### POST /api/products/create

Crea un producto.

Body:

```json
{
  "name": "Producto",
  "price": 1000,
  "stock": 10
}
```

---

### POST /api/products/bulk

Crea múltiples productos.

Body:

```json
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
```

---

### PUT /api/products/:id

Actualiza completamente un producto.

---

### PATCH /api/products/:id

Actualiza parcialmente un producto.

Ejemplo:

```json
{
  "price": 1500
}
```

---

### DELETE /api/products/:id

Elimina un producto.

Respuesta:

```json
{
  "message": "Producto eliminado correctamente"
}
```

---

## 🗄 Base de datos

Colección Firestore:

```text
products
```

Documento:

```json
{
  "name": "Producto",
  "price": 1000,
  "stock": 10
}
```

---

## ⚙️ Funcionalidades

* Login con JWT
* Middleware de autenticación
* CRUD completo de productos
* Actualización parcial con PATCH
* Creación masiva con BULK
* Integración con Firebase Firestore
* Arquitectura por capas
* Manejo de errores HTTP
* Variables de entorno
* Preparado para Vercel

---

## 🚨 Códigos de estado utilizados

* 200 OK
* 201 Created
* 400 Bad Request
* 401 Unauthorized
* 403 Forbidden
* 404 Not Found
* 500 Internal Server Error

---

## 👨‍💻 Autor

Claudia Oliverio

Proyecto final de Backend desarrollado con Node.js, Express, JWT y Firebase Firestore para TechLab.
