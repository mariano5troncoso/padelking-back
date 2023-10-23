import { Schema, model, Types } from 'mongoose';

let collection = 'products'
let schema = new Schema(
    {
        name: { type: String, require: true },
        brand: { type: String, require: true },
        category_id: { type: Types.ObjectId, ref:'categories', require: true },
        description: { type: Array, require: true },
        cover_photo: { type: Array, require: true },
        price: { type: Number, require: true },
        stock: { type: Number, require: true },
        favorite: { type: Boolean, default: false },
        offer: { type: Boolean, default: false },
    },
    {timestamps: true}
    )

const Product = model(collection, schema);
export default Product;