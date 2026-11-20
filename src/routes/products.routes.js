import express from "express";
import {
  getAllProductsControllers,
  getProductByIdControllers,
} from "../controllers/products.controller.js";

const routes = express.Router();

routes.get("/products", getAllProductsControllers);

routes.get("/products/:id", getProductByIdControllers);

export default routes;
