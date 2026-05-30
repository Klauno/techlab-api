import {
    getAllProductsModel,
    getProductByIdModel,
    createProductModel,
    updateProductModel,
    deleteProductModel
} from '../models/product.model.js';

export const getAllProductsService = async () => {

    return await getAllProductsModel();
};

export const getProductByIdService = async (
    id
) => {

    return await getProductByIdModel(id);
};

export const createProductService = async (
    product
) => {

    return await createProductModel(product);
};

export const updateProductService = async (
    id,
    product
) => {

    return await updateProductModel(
        id,
        product
    );
};

export const deleteProductService = async (
    id
) => {

    return await deleteProductModel(id);
};