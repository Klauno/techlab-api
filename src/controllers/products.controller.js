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

        res.status(200).json({
            message: "Productos obtenidos correctamente",
            products: data
        });

    } catch {

        res.status(500).json({
            message: "Error al obtener los productos"
        });
    }
};

export const getProductById = async (req, res) => {
    try {

        const { id } = req.params;

        const data = await getProductByIdService(id);

        if (!data) {
            return res.status(404).json({
                message: "Producto no encontrado"
            });
        }

        res.status(200).json({
            message: "Producto encontrado",
            product: data
        });

    } catch {

        res.status(500).json({
            message: "Error al buscar el producto"
        });
    }
};

export const createProduct = async (req, res) => {
    try {

        const data = await createProductService(req.body);

        res.status(201).json({
            message: "Producto creado correctamente",
            product: data
        });

    } catch {

        res.status(500).json({
            message: "Error al crear el producto"
        });
    }
};

/* 🔥 ESTE ES OBLIGATORIO */
export const createMultipleProducts = async (req, res) => {
    try {

        const products = req.body;

        if (!Array.isArray(products)) {
            return res.status(400).json({
                message: "Debe enviar un array de productos"
            });
        }

        const result = await Promise.all(
            products.map(product =>
                createProductService(product)
            )
        );

        res.status(201).json({
            message: `${result.length} productos creados correctamente`,
            products: result
        });

    } catch {

        res.status(500).json({
            message: "Error al crear productos"
        });
    }
};

export const updateProduct = async (req, res) => {
    try {

        const data = await updateProductService(
            req.params.id,
            req.body
        );

        if (!data) {
            return res.status(404).json({
                message: "Producto no encontrado"
            });
        }

        res.status(200).json({
            message: "Producto actualizado correctamente",
            product: data
        });

    } catch {

        res.status(500).json({
            message: "Error al actualizar el producto"
        });
    }
};

export const patchProduct = async (req, res) => {
    try {

        const { id: _, username, password, ...safe } = req.body;

        const data = await updateProductService(
            req.params.id,
            safe
        );

        if (!data) {
            return res.status(404).json({
                message: "Producto no encontrado"
            });
        }

        res.status(200).json({
            message: "Producto actualizado parcialmente",
            product: data
        });

    } catch {

        res.status(500).json({
            message: "Error al actualizar parcialmente el producto"
        });
    }
};

export const deleteProduct = async (req, res) => {
    try {

        const data = await deleteProductService(
            req.params.id
        );

        if (!data) {
            return res.status(404).json({
                message: "Producto no encontrado"
            });
        }

        res.status(200).json({
            message: "Producto eliminado correctamente"
        });

    } catch {

        res.status(500).json({
            message: "Error al eliminar el producto"
        });
    }
};