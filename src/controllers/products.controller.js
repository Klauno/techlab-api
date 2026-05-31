import {
    getAllProductsService,
    getProductByIdService,
    createProductService,
    updateProductService,
    deleteProductService
} from '../services/products.service.js';

export const getAllProducts = async (
    req,
    res
) => {

    try {

        const products =
            await getAllProductsService();

        res.status(200).json(products);

    } catch (error) {

        res.status(500).json({
            message: 'Error interno del servidor'
        });

    }

};

export const getProductById = async (
    req,
    res
) => {

    try {

        const { id } = req.params;

        const product =
            await getProductByIdService(id);

        if (!product) {

            return res.status(404).json({
                message:
                    'Producto no encontrado'
            });

        }

        res.status(200).json(product);

    } catch (error) {

        res.status(500).json({
            message: 'Error interno del servidor'
        });

    }

};

export const createProduct = async (
    req,
    res
) => {

    try {

        const {
            name,
            price,
            stock
        } = req.body;

        if (
            !name ||
            price === undefined ||
            stock === undefined
        ) {

            return res.status(400).json({
                message:
                    'Faltan datos obligatorios'
            });

        }

        const newProduct =
            await createProductService({
                name,
                price,
                stock
            });

        res.status(201).json({
            message: 'Producto creado',
            product: newProduct
        });

    } catch (error) {

        res.status(500).json({
            message: 'Error interno del servidor'
        });

    }

};

export const updateProduct = async (
    req,
    res
) => {

    try {

        const { id } = req.params;

        const updatedProduct =
            await updateProductService(
                id,
                req.body
            );

        if (!updatedProduct) {

            return res.status(404).json({
                message:
                    'Producto no encontrado'
            });

        }

        res.status(200).json({
            message:
                'Producto actualizado',
            product:
                updatedProduct
        });

    } catch (error) {

        res.status(500).json({
            message: 'Error interno del servidor'
        });

    }

};

export const deleteProduct = async (
    req,
    res
) => {

    try {

        const { id } = req.params;

        const deletedProduct =
            await deleteProductService(id);

        if (!deletedProduct) {

            return res.status(404).json({
                message:
                    'Producto no encontrado'
            });

        }

        res.status(200).json({
            message:
                'Producto eliminado',
            product:
                deletedProduct
        });

    } catch (error) {

        res.status(500).json({
            message: 'Error interno del servidor'
        });

    }

};