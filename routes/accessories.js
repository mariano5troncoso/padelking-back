import Router from "express"
import create from "../controllers/accesorios/create.js"

import read from "../controllers/accesorios/read.js"
import update from "../controllers/accesorios/update.js"
import remove from "../controllers/accesorios/destroy.js"
import validator from "../middlewares/validator.js"
import accesoriesCreate from "../schemas/accesories/accessoiresCreate.js"





let accesorios_router = Router();

accesorios_router.get("/", read);
accesorios_router.post("/create",  validator(accesoriesCreate), create)
accesorios_router.get("/:id", read)
accesorios_router.put("/update/:id", update)
accesorios_router.delete("/delete/:id", remove)


export default accesorios_router;