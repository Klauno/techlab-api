import express from "express";
import cors from "cors";

import productsRoutes from "./routes/products.routes.js";
import authRoutes from "./routes/auth.routes.js";

const app = express();

app.use(cors());
app.use(express.json());

// ruta principal
app.get("/", (req, res) => {
    res.status(200).send("🚀 API TechLab funcionando correctamente en Vercel");
});

// health check
app.get("/up", (req, res) => {
    res.status(200).json({
        status: "ok",
        message: "Servidor activo 🚀"
    });
});

// rutas
app.use("/api/products", productsRoutes);
app.use("/auth", authRoutes);

export default app;