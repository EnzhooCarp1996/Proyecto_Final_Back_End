import {
  getAllProductsService,
  getProductByIdService,
  createProductService,
  deleteProductService,
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
  // verifica si existe id sino retorna status 400
  if (!id) {
    return res.status(400).send({
      message: "El id del producto es necesario",
    });
  }

  try {
    const product = await getProductByIdService(id);

    // verifica si existe producto sino retorna status 404
    if (!product) {
      return res.status(404).send({
        message: "No se encontró el producto",
      });
    }

    res.send({
      message: "Producto encontrado",
      data: product,
    });
  } catch (err) {
    res.status(500).send({
      message: "Error interno",
    });
  }
}

export async function createProductController(req, res) {
  const product = req.body;

  // verifica si existe producto sino retorna status 400
  if (product) {
    return req.status(400).send({
      message: "el producto es necesario",
    });
  }

  try {
    const newProduct = await createProductService(product);
    res.status(200).send({
      message: "se creo el producto exitosamente",
      data: newProduct
    });
  } catch (err) {
    console.log("Error interno: ", err);
    res.status(500).send({
      message: "error interno",
    });
  }
}

export async function deleteProductController(req, res) {
  const id = req.params.id;

  // verifica si existe id sino retorna status 400
  if (!id) {
    return res.status(400).send({
      message: "El id del producto es necesario",
    });
  }

  try {
    const idDelete = await deleteProductService(id);
    console.log(idDelete);

    // verifica si existe el producto eliminado sino retorna status 404
    if (!idDelete) {
      return res.status(404).send({
        message: "No se encontró el producto",
      });
    }

    res.send({
      message: "Producto eliminado: ",
      data: id,
    });
  } catch (err) {
    res.status(500).send({
      message: "Error interno",
    });
  }
}
