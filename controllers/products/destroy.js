import Product from "../../models/Product.js";

let remove = async (req, res, next) => {  
    try {
        let { id } = req.params;
        let productRemoved = await Product.findByIdAndDelete(id);
        if (!productRemoved) {
            return res.status(400).json({
                success: false,
                message: "Product doesn't exist"
            })
        }
        return res.status(200).json({
            success: true,
            message: "Product deleted successfully"
        })

    } catch (error) {
        return next(error)
    }
}

export default remove;