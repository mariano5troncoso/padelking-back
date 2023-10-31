import Product from "../../models/Product.js";

const read_one = async (req, res, next) => {
    try {
        const product_id = req.params.id;
        const product = await Product.findById(product_id);


        if (!product) {
            return res.status(404).json({
                success: false,
                message: 'Product not found'
            });
        }

        return res.status(200).json({
            success: true,
            message: 'Product found successfully',
            response: product
        });

    } catch (error) {
        return next(error);
    }
};

export default read_one;