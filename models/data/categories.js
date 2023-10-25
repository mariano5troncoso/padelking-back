import 'dotenv/config.js'
import '../../config/db.js'
import Category from '../Category.js'

let categories = [
    {
        name: "Paletas"
    },
    {
        name: "Accesorios"
    },
    {
        name: "Indumentaria"
    }
    
]
Category.insertMany(categories);