import {
    getAllProductsService,
    getProductByIdService,
    createProductService,
    updateProductService,
    deleteProductService
} from '../services/products.service.js';

export const getAllProducts = async (req, res) => {
    try {
        const data = await getAllProductsService();
        res.json(data);
    } catch {
        res.status(500).json({ message: "error" });
    }
};

export const getProductById = async (req, res) => {
    try {
        const { id } = req.params;
        const data = await getProductByIdService(id);

        if (!data) return res.status(404).json({ message: "not found" });

        res.json(data);
    } catch {
        res.status(500).json({ message: "error" });
    }
};

export const createProduct = async (req, res) => {
    try {
        const data = await createProductService(req.body);
        res.status(201).json(data);
    } catch {
        res.status(500).json({ message: "error" });
    }
};

/* 🔥 ESTE ES OBLIGATORIO */
export const createMultipleProducts = async (req, res) => {
    try {
        const products = req.body;

        if (!Array.isArray(products)) {
            return res.status(400).json({ message: "Debe ser array" });
        }

        const result = await Promise.all(
            products.map(p => createProductService(p))
        );

        res.status(201).json(result);
    } catch {
        res.status(500).json({ message: "error" });
    }
};

export const updateProduct = async (req, res) => {
    try {
        const data = await updateProductService(req.params.id, req.body);

        if (!data) return res.status(404).json({ message: "not found" });

        res.json(data);
    } catch {
        res.status(500).json({ message: "error" });
    }
};

export const patchProduct = async (req, res) => {
    try {
        const { id: _, username, password, ...safe } = req.body;

        const data = await updateProductService(req.params.id, safe);

        res.json(data);
    } catch {
        res.status(500).json({ message: "error" });
    }
};

export const deleteProduct = async (req, res) => {
    try {
        const data = await deleteProductService(req.params.id);

        if (!data) return res.status(404).json({ message: "not found" });

        res.json(data);
    } catch {
        res.status(500).json({ message: "error" });
    }
};