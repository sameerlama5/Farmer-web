const express = require("express");
const { createCategory, getCategories, getCategoryById, updateCategory, deleteCategory } = require("../controllers/category");
const router = express.Router();

router.post("/category", createCategory);
router.get("/category", getCategories);
router.get("/category:id", getCategoryById);
router.put("/category:id", updateCategory);
router.delete("/category:id", deleteCategory);

module.exports = router;