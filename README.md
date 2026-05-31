# TechLab API

API REST desarrollada con Node.js y Express para la gestión de productos, implementando autenticación mediante JWT y arquitectura por capas.

## Tecnologías utilizadas

* Node.js
* Express
* JWT (jsonwebtoken)
* Dotenv
* Cors
* Body Parser
* Firebase Firestore (Firebase Admin SDK)

---

## Estructura del proyecto

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
│   │   └── product.model.js
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
├── .env
├── .gitignore
├── index.js
├── package.json
└── README.md

---

## Instalación

Clonar el repositorio:

git clone https://github.com/Klauno/techlab-api.git

Ingresar al proyecto:

cd techlab-api

Instalar dependencias:

npm install

---

## Variables de entorno

Crear un archivo `.env` en la raíz del proyecto.

PORT=3000
JWT_SECRET=techlab_secret_key

⚠️ Importante:  
El backend usa Firebase Admin SDK, por lo que NO requiere las variables FIREBASE_API_KEY, AUTH_DOMAIN, PROJECT_ID, etc.

---

## Configuración de Firebase Admin

Crear el archivo:

src/config/serviceAccountKey.json

Pegar la clave privada enviada por el autor del proyecto.

⚠️ Este archivo no se incluye en el repositorio por seguridad.

---

## Ejecutar el proyecto

npm start

Servidor:

http://localhost:3000

---

## Estado del servidor

### Endpoint

GET /up

### Respuesta

{
  "status": "ok",
  "message": "Servidor activo"
}

---

# Autenticación

## Login

### Endpoint

POST /auth/login

### Body

{
  "username": "admin",
  "password": "123456"
}

### Respuesta

{
  "token": "jwt_token"
}

---

# Productos

Todas las rutas requieren JWT.

Agregar en Headers:

Authorization: Bearer TU_TOKEN

---

## Obtener todos los productos

GET /api/products

### Respuesta

[
  {
    "id": "abc123",
    "name": "Mouse Gamer",
    "price": 25000,
    "stock": 10
  }
]

---

## Obtener producto por ID

GET /api/products/:id

---

## Crear producto

POST /api/products/create

### Body

{
  "name": "Teclado RGB",
  "price": 45000,
  "stock": 5
}

---

## Actualizar producto

PUT /api/products/:id

### Body

{
  "name": "Teclado RGB Pro",
  "price": 50000,
  "stock": 8
}

---

## Eliminar producto

DELETE /api/products/:id

---

# Seguridad

La API implementa:

* JSON Web Token (JWT)
* Middleware de autenticación
* Protección de rutas privadas
* Variables de entorno mediante Dotenv
* Integración con Firebase Firestore mediante Firebase Admin SDK

---

# Base de datos

El proyecto utiliza Firebase Firestore como servicio de persistencia de datos.

La colección utilizada es:

products

Cada documento contiene:

{
  "name": "string",
  "price": number,
  "stock": number
}

---

# Funcionalidades implementadas

* Login de usuario
* Generación de Token JWT
* Middleware de autenticación
* CRUD completo de productos
* Arquitectura por capas
* Manejo de errores HTTP
* Protección de endpoints
* Endpoint de estado del servidor (/up)
* Integración con Firebase Firestore
* Variables de entorno mediante Dotenv

---

# Autor

Claudia Oliverio

Proyecto desarrollado para práctica de Backend con Node.js, Express, JWT y Firebase Firestore.
