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

const router = express.Router();

// GET
router.get("/", getAllProducts);
router.get("/:id", getProductById);

// CREATE SINGLE
router.post("/create", createProduct);

// CREATE MULTIPLE (BULK)
router.post("/bulk", createMultipleProducts);

// UPDATE
router.put("/:id", updateProduct);

// PATCH
router.patch("/:id", patchProduct);

// DELETE
router.delete("/:id", deleteProduct);

export default router;