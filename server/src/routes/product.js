const express = require("express");
const { createProduct, getProducts, getProductById, updateProduct, deleteProduct } = require("../controllers/product");

const router = express.Router();

router.post("/product", createProduct);
router.get("/product", getProducts);
router.get("/product:id", getProductById);
router.put("/product:id", updateProduct);
router.delete("/product:id", deleteProduct);

module.exports = router;
