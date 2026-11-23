import {
  getProducts,
  getProductById,
  getProductsByQuery,
  createProduct,
  deleteProduct,
} from "../models/products.models.js";

export const getAllProductsService = async (category) => {
  if (category) {
    const products_q = await getProductsByQuery(category);
    return products_q;
  } else {
    const products = await getProducts();
    console.log(products);
    return products;
  }
};

export const getProductByIdService = async (id) => {
  const product = await getProductById(id);
  return product;
};

export const createProductService = async (newProduct) => {
  const product = await createProduct(newProduct);
  return product;
};

export const deleteProductService = async (id) => {
  const idDelete = await deleteProduct(id);
  return idDelete;
};
