# TechLab API

API REST desarrollada con Node.js y Express para la gestión de productos, implementando autenticación mediante JWT y arquitectura por capas.

## Tecnologías utilizadas

- Node.js
- Express
- JWT (jsonwebtoken)
- Dotenv
- Cors
- Body Parser

---

## Estructura del proyecto

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
```

---

## Instalación

Clonar el repositorio:

```bash
git clone https://github.com/Klauno/techlab-api.git
```

Ingresar al proyecto:

```bash
cd techlab-api
```

Instalar dependencias:

```bash
npm install
```

---

## Variables de entorno

Crear un archivo `.env` en la raíz del proyecto.

```env
PORT=3000
JWT_SECRET=techlab_secret
```

---

## Ejecutar el proyecto

```bash
npm start
```

Servidor:

```text
http://localhost:3000
```

---

# Autenticación

## Login

### Endpoint

```http
POST /auth/login
```

### Body

```json
{
  "username": "admin",
  "password": "123456"
}
```

### Respuesta

```json
{
  "token": "jwt_token"
}
```

---

# Productos

Todas las rutas requieren JWT.

Agregar en Headers:

```text
Authorization: Bearer TU_TOKEN
```

---

## Obtener todos los productos

```http
GET /api/products
```

### Respuesta

```json
[
  {
    "id": 1,
    "name": "Mouse Gamer",
    "price": 25000,
    "stock": 10
  }
]
```

---

## Obtener producto por ID

```http
GET /api/products/:id
```

---

## Crear producto

```http
POST /api/products/create
```

### Body

```json
{
  "name": "Teclado RGB",
  "price": 45000,
  "stock": 5
}
```

---

## Actualizar producto

```http
PUT /api/products/:id
```

### Body

```json
{
  "name": "Teclado RGB Pro",
  "price": 50000,
  "stock": 8
}
```

---

## Eliminar producto

```http
DELETE /api/products/:id
```

---

# Seguridad

La API implementa:

- JSON Web Token (JWT)
- Middleware de autenticación
- Protección de rutas privadas
- Variables de entorno con Dotenv

---

# Funcionalidades implementadas

- Login de usuario
- Generación de Token JWT
- CRUD completo de productos
- Arquitectura por capas
- Manejo de errores
- Protección de endpoints

---

# Autor

Claudia Oliverio

Proyecto desarrollado para práctica de Backend con Node.js y Express.