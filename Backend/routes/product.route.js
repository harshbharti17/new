import express from "express";
import {
  addProduct,
  listProducts,
  removeProduct,
  singleProduct,
} from "../controllers/product.controller.js";

const productRouter = express.Router();

productRouter.post("/add", addProduct);
productRouter.post("/remove", removeProduct);
productRouter.post("/single", singleProduct);
productRouter.post("/add", addProduct);
productRouter.get("/list", listProducts);

export default productRouter;
