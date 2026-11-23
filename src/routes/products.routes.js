import express from "express";
import {
  getAllProductsControllers,
  getProductByIdControllers,
  createProductController,
  deleteProductController,
} from "../controllers/products.controller.js";
import { authentication } from "../middlewares/authentication.js";

const routes = express.Router();

routes.get("/products", authentication, getAllProductsControllers);

routes.get("/products/:id", authentication, getProductByIdControllers);

routes.post("/products/create", authentication, createProductController);

routes.delete("/products/:id", authentication, deleteProductController);

export default routes;
