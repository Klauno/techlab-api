import express from 'express';
import cors from 'cors';

import productsRoutes from './routes/products.routes.js';
import authRoutes from './routes/auth.routes.js';

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/products', productsRoutes);
app.use('/auth', authRoutes);

app.get('/up', (req, res) => {
    res.status(200).json({
        status: 'ok',
        message: 'Servidor activo'
    });
});

app.use((req, res) => {
    res.status(404).json({
        message: 'Ruta no encontrada'
    });
});

export default app;
