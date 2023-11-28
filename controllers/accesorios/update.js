import Accesorios from "../../models/Accesorios.js";

let update = async (req, res, next) => {
    try {
        let {name, description, cover_photo, price, stock, favorite, offer} = req.body
        let {id} = req.params
        let data = {}

        if (name) {
            data.name = name
        }
        if (description) {
            data.description = description
        }
        if (cover_photo) {
            data.cover_photo = cover_photo
        }
        if (price) {
            data.price = price
        }
        if (stock) {
            data.stock = stock
        }
        if (favorite) {
            data.favorite = favorite
        }
        if (offer) {
            data.offer = offer
        }
        let productUpdated = await Accesorios.findByIdAndUpdated({_id: id}, {...data})
        if (!productUpdated) {
            return res.status(401).json({
                success: true,
                message: "Product doesn't exist"
            })
        }
        return res.status(200).json({
            success: true,
            message: "Product updated sucessfully",
            response: productUpdated
        })

    } catch (error) {
        return next(error)
    }
}

export default update;