import joi from "joi"

let categoryCreate = joi.object({
    name: joi.string().required().messages({
        "any.required": "Name is required"
    }),
    description: joi.string().required().min(10).messages({
        "string.min": "Description length must be at least 10 characters long",
        "string.empty": "Description is not allowed to be empty"
    }),
    cover_photo: joi.string().required().uri().messages({
            'any.required': 'Cover photo is required',
        }),
})

export default categoryCreate;