import express from "express";
import cors from "cors";
import routesProducts from "./src/routes/products.routes.js";
import authRouter from "./src/routes/auth.routes.js";
import bodyParser from "body-parser";

const app = express();

// Middleware de Cors
app.use(cors());

// Transformar el body de la request a JSON
app.use(bodyParser.json());

app.use((req, res, next) => {
  console.log(`Datos Recibidos: ${req.method} ${req.url}`);
  next();
});

// Routers
app.use("/auth", authRouter);
app.use("/api", routesProducts);

app.use((req, res, next) => {
  res.status(404).json({
    error: "404 ruta no encontrada",
    mensaje: `el recurso ${req.url} no existe`,
  });
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Servidor en http://localhost:${PORT}`);
});
