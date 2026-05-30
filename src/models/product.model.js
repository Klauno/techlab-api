const products = [];

export const getAllProductsModel = async () => {
    return products;
};

export const getProductByIdModel = async (id) => {

    return products.find(
        product => product.id == id
    );
};

export const createProductModel = async (
    product
) => {

    const newProduct = {
        id: Date.now(),
        ...product
    };

    products.push(newProduct);

    return newProduct;
};

export const updateProductModel = async (
    id,
    updatedData
) => {

    const index = products.findIndex(
        product => product.id == id
    );

    if (index === -1) {
        return null;
    }

    products[index] = {
        ...products[index],
        ...updatedData
    };

    return products[index];
};

export const deleteProductModel = async (
    id
) => {

    const index = products.findIndex(
        product => product.id == id
    );

    if (index === -1) {
        return null;
    }

    return products.splice(index, 1)[0];
};