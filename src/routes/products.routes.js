import express from "express";

import {
    getAllProducts,
    getProductById,
    createProduct,
    createMultipleProducts,
    updateProduct,
    patchProduct,
    deleteProduct
} from "../controllers/products.controller.js";

import { verifyToken } from "../middlewares/auth.middleware.js";

const router = express.Router();

router.get("/", verifyToken, getAllProducts);
router.get("/:id", verifyToken, getProductById);

router.post("/create", verifyToken, createProduct);
router.post("/bulk", verifyToken, createMultipleProducts);

router.put("/:id", verifyToken, updateProduct);
router.patch("/:id", verifyToken, patchProduct);

router.delete("/:id", verifyToken, deleteProduct);

export default router;