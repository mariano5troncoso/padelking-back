import Product from "../../models/Product.js";

let read = async (req, res, next) => {
    try {
       let queries = {}
       //let pagination = {page: 1, limit: 12};
       let sort = {};
       
       if (req.query.page) {
        pagination.page = req.query.page
       }
       if (req.query.limit) {
        pagination.limit = req.pagination.limit;
       }
       if (req.query.name){
        queries.name = new RegExp(req.query.name.trim(), 'i')
       }
       if (req.query.description) {
        queries.description = req.query.description
       }
       if (req.query.brand) {
        queries.description = new RegExp(req.query.brand.trin(), 'i')
       }
       // Ordenar por nombre (name) de manera ascendente (A-Z) o descendente (Z-A)
        if (req.query.sortByName) {
            sort.name = req.query.sortByName === 'asc' ? 1 : -1;
        }

        // Ordenar por precio (price) de manera ascendente (menor a mayor) o descendente (mayor a menor)
        if (req.query.sortByPrice) {
            sort.price = req.query.sortByPrice === 'asc' ? 1 : -1;
        }

       let products = await Product.find(queries)
        .sort(sort)
        //.skip(pagination.page > 0 ? (pagination.page - 1) * pagination.limit : 0)
        //.limit(pagination.limit > 0 ? pagination.limit : 0)

        let counter = await Product.countDocuments(queries)
        //let pages = Math.ceil(counter/pagination.limit)
        //let prevPage = pagination.page > 1 ? Number(pagination.page) -1 : 0
        //let nextPage = pagination.limit < pages ? Number(pagination.page) + 1 : 0

        return res.status(201).json({
            success: true,
            message: 'Products finded sucessfully',
            response: products,
            //pages,
            //prevPage,
            //nextPage
        })

    } catch (error) {
        return next(error)
    }

}

export default read;