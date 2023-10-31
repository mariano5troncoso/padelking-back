import joi from "joi"

let productCreate = joi.object({

    name: joi.string().required().min(3).messages({
        "any.required": "Name is required",
        "string.min": "Min is not valid"
    }),
    brand: joi.string().required().messages({
        "ani.required": "Brand is required"
    }),
    category_id: joi.string().required().messages({
        "any.required": "Category is required"
    }),
    description: joi.array().items(joi.object({
        resum: joi.string().required(),
        material: joi.string().required(),
        condition: joi.string().required(),
        color: joi.string().required(),
    })).required().min(1).messages({
        "array.empty": "Description is required",
    }),
    cover_photo: joi.array().items(joi.string().uri()).required().messages({
            "array.base": "Cover photo must be an array",
            "array.empty": "Cover photo is required",
            "string.uri": "Cover photo must be a valid URL"
        }),
    price: joi.number().required().min(0.01).max(9999999999).messages({
        "number.base": "Price must be a number",
        "number.min": "Price must be at least $0.01",
        "number.max": "Price must be at most $9,999,999,999",
        "number.required": "Price is required"
    }),
    stock: joi.number().required().min(0).max(9999999999).messages({
        'number.integer': 'Stock must be an integer number',
        'number.base': 'Stock must be a number'
    }),
    offer: joi.string().optional()
})

export default productCreate;