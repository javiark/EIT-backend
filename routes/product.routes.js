const express = require("express")
const router=express.Router();
const productController = require("./../controllers/product.controller")
//Obtener todos los prodcutos
router.get("/products",productController.getAllProducts);

// router.get("/products", (req,res)=>{
//     res.status(200).send("Productos solicitados correctamente");
// })

// Obtener todos los productos por categoria
// Obtener un producto epecifico
// Añadir un producto
// Eliminar un producto
router.delete("/products", productController.deleteProduct)

// Modificar un producto

module.exports = router;