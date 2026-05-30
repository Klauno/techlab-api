const products = [
    {
        id: 1,
        name: "Mouse Gamer",
        price: 25000,
        stock: 10
    },
    {
        id: 2,
        name: "Teclado RGB",
        price: 45000,
        stock: 5
    },
    {
        id: 3,
        name: "Monitor 24 pulgadas",
        price: 180000,
        stock: 3
    },
    {
        id: 4,
        name: "Auriculares HyperX",
        price: 65000,
        stock: 8
    },
    {
        id: 5,
        name: "Webcam Full HD",
        price: 35000,
        stock: 12
    }
];

export const getAllProductsModel = async () => {
    return products;
};

export const getProductByIdModel = async (id) => {

    return products.find(
        product => product.id == id
    );
};

export const createProductModel = async (product) => {

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

export const deleteProductModel = async (id) => {

    const index = products.findIndex(
        product => product.id == id
    );

    if (index === -1) {
        return null;
    }

    return products.splice(index, 1)[0];
};