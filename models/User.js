import {Schema, model} from 'mongoose'
//cluster: conjunto de base de datos(el link de mongo que obtienen es del cluster)
//db: conjunto de colecciones (coleccion hace referecnia a recurso y recurso hace referencia a los modelos de datos que necesita mi aplicacion)
//coleccion: conjunto de documentos
//documento: dato
//cada objeto de ese array era un documento de la coleccion

let collection = 'users' //los nombres de la colecciones van siempre en plural (porque son un conjunto de), van siemore en ingles y tienen que ser descriptivos del recurso (ej.. recurso: category => coleccion: categories)
const schema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    photo: { type: String, required: true },
    role: { type: Number, default: 0 },
    online: { type: Boolean, default: false },
            
}, {
    timestamps: true
});


let User = model(collection, schema)

export default User