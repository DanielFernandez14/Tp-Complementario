import { Router } from "express"
import { addNewProduct, getAllProducts, deleteProduct, updateProduct, searchProducts } from "../controllers/productController"

const productRouter = Router()

// manejar las peticiones para los productos
productRouter.get("/", getAllProducts)
productRouter.post("/", addNewProduct)
productRouter.patch("/:id", updateProduct)
productRouter.delete("/:id", deleteProduct)
productRouter.get("/search", searchProducts)

export { productRouter }