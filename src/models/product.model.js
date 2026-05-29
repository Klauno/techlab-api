let products = [];

export const getAllProductsModel = async () => {

    return products;
};

export const getProductByIdModel = async (
    id
) => {

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

    return newProduct.id;
};

export const deleteProductModel = async (
    id
) => {

    products = products.filter(
        product => product.id != id
    );
};