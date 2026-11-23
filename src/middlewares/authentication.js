import jwt from "jsonwebtoken";
import dotenv from "dotenv";

const SECRET_KEY = process.env.JWT_SECRET_KEY;

// Middleware para verificar el token JWT

export const authentication = (req, res, next) => {
  const token = req.headers["authorization"].split(" ")[1];

  if (!token)
    return res.status(401).json({ message: "Token no proporcionado" });

  jwt.verify(token, SECRET_KEY, (err) => {
    if (err) return res.sendStatus(403);
    next();
  });
};
