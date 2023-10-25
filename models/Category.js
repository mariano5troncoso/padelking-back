import { Schema, model, Types } from 'mongoose';

let collection = 'categories'
let schema = new Schema( //Schema es un constructor que recibe un objeto
    {
        name: { type: String, require: true },
        brand: { type: String, require: true },
        category_id: { type: Types.ObjectId, ref:'products', require: true },
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