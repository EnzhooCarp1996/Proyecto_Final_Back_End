import {
  getProducts,
  getProductById,
  getProductsByQuery,
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
