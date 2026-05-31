# 🚀 TechLab API

API REST desarrollada con Node.js y Express para la gestión de productos.  
Incluye autenticación mediante JWT, arquitectura por capas y conexión a Firebase Firestore mediante Firebase Admin SDK.  
También incluye un modelo local (`product.model.local.js`) para pruebas sin base de datos.

---

## 🧰 Tecnologías utilizadas

* Node.js  
* Express  
* Firebase Admin SDK (Firestore)  
* JSON Web Token (JWT)  
* Dotenv  
* CORS  
* Body Parser  

---

## 📁 Estructura del proyecto

techlab-api/
│
├── src/
│   ├── config/
│   │   ├── firebase.js
│   │   ├── firebaseAdmin.js
│   │   └── serviceAccountKey.json   (IGNORADO en Git)
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
│   │   └── product.model.local.js   (para pruebas sin Firestore)
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

Clonar el repositorio:
git clone https://github.com/Klauno/techlab-api.git

Ingresar al proyecto:
cd techlab-api

Instalar dependencias:
npm install

---

## 🔐 Variables de entorno

Crear un archivo `.env` en la raíz del proyecto:

PORT=3000  
JWT_SECRET=techlab_secret_key  

⚠️ Importante:  
El backend usa Firebase Admin SDK, por lo que NO utiliza variables como FIREBASE_API_KEY o similares.

---

## 🔥 Configuración de Firebase Admin

Crear el archivo:
src/config/serviceAccountKey.json

Pegar la clave privada enviada por el autor del proyecto.

⚠️ Este archivo NO se incluye en el repositorio por seguridad.

---

## ▶️ Ejecutar el proyecto

npm start

Servidor disponible en:
http://localhost:3000

---

## ❤️ Estado del servidor

GET /up

Respuesta:
{
  "status": "ok",
  "message": "Servidor activo"
}

---

# 🔑 Autenticación

## POST /auth/login

Body:
{
  "username": "admin",
  "password": "123456"
}

Respuesta:
{
  "token": "jwt_token"
}

---

# 📦 Productos

Todas las rutas requieren JWT.

Header obligatorio:
Authorization: Bearer TU_TOKEN

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

Respuesta:
{
  "message": "Producto creado",
  "id": "string"
}

---

## PUT /api/products/:id

{
  "name": "string",
  "price": 0,
  "stock": 0
}

Respuesta:
{
  "message": "Producto actualizado"
}

---

## DELETE /api/products/:id

{
  "message": "Producto eliminado"
}

---

# 🧪 Modo de prueba local (sin Firestore)

El proyecto incluye un modelo alternativo:

product.model.local.js

Permite probar la API sin conectarse a Firebase.  
Ideal para desarrollo o pruebas rápidas.

Para usarlo, reemplazar en products.service.js:

const ProductModel = require("../models/product.model");

por:

const ProductModel = require("../models/product.model.local");

---

# 🔒 Seguridad

* Autenticación mediante JWT  
* Middleware de protección de rutas  
* Variables de entorno mediante Dotenv  
* Clave privada de Firebase excluida del repositorio  
* Firestore gestionado mediante Firebase Admin SDK  

---

# 🗄 Base de datos

Colección utilizada:
products

Estructura:
{
  "name": "string",
  "price": 0,
  "stock": 0
}

---

# ⚙️ Funcionalidades implementadas

* Login de usuario  
* Generación de Token JWT  
* Middleware de autenticación  
* CRUD completo de productos  
* Arquitectura por capas  
* Manejo de errores HTTP  
* Protección de endpoints  
* Endpoint de estado del servidor (/up)  
* Integración con Firebase Firestore  
* Modo local sin base de datos  
* Variables de entorno mediante Dotenv  

---

# 👨‍💻 Autor

Claudia Oliverio  
Proyecto desarrollado para práctica de Backend con Node.js, Express, JWT y Firebase Firestore
