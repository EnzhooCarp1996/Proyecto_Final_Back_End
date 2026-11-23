import {
  collection,
  getDocs,
  doc,
  getDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  query,
  where,
} from "firebase/firestore";
import { db } from "../data/data.js";

export const getProducts = async () => {
  try {
    const productosCollection = await getDocs(collection(db, "products"));
    return productosCollection.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
  } catch (err) {
    console.error("Error al obtener los productos:", err);
    throw err;
  }
};

export const getProductById = async (id) => {
  try {
    const docRef = doc(db, "products", id);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      return { id: docSnap.id, ...docSnap.data() };
    } else {
      return null;
    }
  } catch (err) {
    console.error(`Error al obtener el producto con ID ${id}:`, err);
    throw err;
  }
};

export const getProductsByQuery = async (valor) => {
  try {
    const q = query(
      collection(db, "products"),
      where("categoria", "==", valor),
    );
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  } catch (err) {
    console.error(`Error realizando la consulta en productos: `, err);
    throw err;
  }
};

export const createProduct = async (newProduct) => {
  try {
    const docRef = await addDoc(collection(db, "products"), newProduct);
    return { id: docRef.id, ...newProduct };
  } catch (err) {
    console.error("Error creando el producto: ", err);
    throw err;
  }
};

export const deleteProduct = async (id) => {
  try {
    const docRef = doc(db, "products", id);
    await deleteDoc(docRef);
    return id;
  } catch (err) {
    console.error(`Error al eliminar el producto con id ${id} :`, err);
    throw err;
  }
};
