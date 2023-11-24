import Router from "express"
import create from "../controllers/products/create.js"

import read_one from "../controllers/products/read_one.js"
import update from "../controllers/products/update.js"
import remove from "../controllers/products/destroy.js"
import validator from "../middlewares/validator.js"
import productCreate from "../schemas/product/productCreate.js"


import read from "../controllers/products/read.js";
import readadmin from "../controllers/auth/read.js";

let product_router = Router();

product_router.get("/", read);
product_router.get("/readadmin", readadmin);
product_router.post("/create",  validator(productCreate), create)
product_router.get("/:id", read_one)
product_router.put("/update/:id", update)
product_router.delete("/delete/:id", remove)


export default product_router;