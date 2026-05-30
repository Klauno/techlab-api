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
            message: 'Error del servidor'
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
                message: 'Producto no encontrado'
            });
        }

        res.status(200).json(product);

    } catch (error) {

        res.status(500).json({
            message: 'Error del servidor'
        });
    }
};

export const createProduct = async (
    req,
    res
) => {

    try {

        const product =
            await createProductService(
                req.body
            );

        res.status(201).json({
            message: 'Producto creado',
            id: product.id
        });

    } catch (error) {

        res.status(500).json({
            message: 'Error del servidor'
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
                message: 'Producto no encontrado'
            });
        }

        res.status(200).json({
            message: 'Producto actualizado',
            product: updatedProduct
        });

    } catch (error) {

        res.status(500).json({
            message: 'Error del servidor'
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
                message: 'Producto no encontrado'
            });
        }

        res.status(200).json({
            message: 'Producto eliminado'
        });

    } catch (error) {

        res.status(500).json({
            message: 'Error del servidor'
        });
    }
};