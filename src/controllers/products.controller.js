import {
    getAllProductsService,
    getProductByIdService,
    createProductService,
    updateProductService,
    deleteProductService
} from '../services/products.service.js';

const validateProduct = (product) => {

    const { name, price, stock } = product;

    if (!name || typeof name !== "string" || !name.trim()) {
        return "El nombre es obligatorio";
    }

    if (price === undefined || isNaN(price)) {
        return "El precio es obligatorio";
    }

    if (Number(price) <= 0) {
        return "El precio debe ser mayor a 0";
    }

    if (stock === undefined || isNaN(stock)) {
        return "El stock es obligatorio";
    }

    if (Number(stock) < 0) {
        return "El stock no puede ser negativo";
    }

    return null;
};

export const getAllProducts = async (req, res) => {
    try {

        const data = await getAllProductsService();

        res.status(200).json({
            message: "Productos obtenidos correctamente",
            products: data
        });

    } catch (error) {

        console.error(error);

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

    } catch (error) {

        console.error(error);

        res.status(500).json({
            message: "Error al buscar el producto"
        });
    }
};

export const createProduct = async (req, res) => {
    try {

        const validationError = validateProduct(req.body);

        if (validationError) {
            return res.status(400).json({
                message: validationError
            });
        }

        const data = await createProductService(req.body);

        res.status(201).json({
            message: "Producto creado correctamente",
            product: data
        });

    } catch (error) {

        console.error(error);

        res.status(500).json({
            message: "Error al crear el producto"
        });
    }
};

export const createMultipleProducts = async (req, res) => {
    try {

        const products = req.body;

        if (!Array.isArray(products)) {
            return res.status(400).json({
                message: "Debe enviar un array de productos"
            });
        }

        for (const product of products) {

            const validationError = validateProduct(product);

            if (validationError) {
                return res.status(400).json({
                    message: validationError
                });
            }
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

    } catch (error) {

        console.error(error);

        res.status(500).json({
            message: "Error al crear productos"
        });
    }
};

export const updateProduct = async (req, res) => {
    try {

        const validationError = validateProduct(req.body);

        if (validationError) {
            return res.status(400).json({
                message: validationError
            });
        }

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

    } catch (error) {

        console.error(error);

        res.status(500).json({
            message: "Error al actualizar el producto"
        });
    }
};

export const patchProduct = async (req, res) => {
    try {

        const { id: _, username, password, ...safe } = req.body;

        if (
            safe.name !== undefined &&
            (!safe.name || !safe.name.trim())
        ) {
            return res.status(400).json({
                message: "El nombre no puede estar vacío"
            });
        }

        if (
            safe.price !== undefined &&
            Number(safe.price) <= 0
        ) {
            return res.status(400).json({
                message: "El precio debe ser mayor a 0"
            });
        }

        if (
            safe.stock !== undefined &&
            Number(safe.stock) < 0
        ) {
            return res.status(400).json({
                message: "El stock no puede ser negativo"
            });
        }

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

    } catch (error) {

        console.error(error);

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

    } catch (error) {

        console.error(error);

        res.status(500).json({
            message: "Error al eliminar el producto"
        });
    }
};