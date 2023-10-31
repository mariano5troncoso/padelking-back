import Product from "../../models/Product.js";

let update = async (req, res, next) => {
    try {
        const { name, description, cover_photo, price, stock, favorite, offer } = req.body;
        const { id } = req.params;
        const data = {};

        if (name) data.name = name;
        if (description) data.description = description;
        if (cover_photo) data.cover_photo = cover_photo;
        if (price) data.price = price;
        if (stock) data.stock = stock;
        if (favorite !== undefined) data.favorite = favorite; // Make sure to update if 'favorite' is provided
        if (offer !== undefined) data.offer = offer; // Make sure to update if 'offer' is provided

        const productUpdated = await Product.findByIdAndUpdate(id, data, { new: true });

        if (!productUpdated) {
            return res.status(404).json({
                success: false,
                message: "Product doesn't exist"
            });
        }

        return res.status(200).json({
            success: true,
            message: "Product updated successfully",
            response: productUpdated
        });
    } catch (error) {
        return next(error);
    }
}

export default update;