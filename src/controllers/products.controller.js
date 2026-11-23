import {
  getAllProductsService,
  getProductByIdService,
} from "../services/products.services.js";

export async function getAllProductsControllers(req, res) {
  const category = req.query.category;
  try {
    const products = await getAllProductsService(category);
    if (products.length > 0) {
      res.send({
        message: "Productos encontrados",
        data: products,
      });
    } else {
      res.status(404).send({
        message: "No se encontraron producto/s",
      });
    }
  } catch (err) {
    res.status(500).send({
      message: "Error interno",
    });
  }
}

export async function getProductByIdControllers(req, res) {
  const id = req.params.id;
  if (id) {
    try {
      const product = await getProductByIdService(id);
      if (product) {
        res.send({
          message: "Producto encontrado",
          data: product,
        });
      } else {
        res.status(404).send({
          message: "No se encontró el producto",
        });
      }
    } catch (err) {
      res.status(500).send({
        message: "Error interno",
      });
    }
  } else {
    res.status(400).send({
      message: "El id del producto es necesario",
    });
  }
}

export async function createProductController(req, res) {
  
  
}

export async function deleteProductController(req, res) {

  
}