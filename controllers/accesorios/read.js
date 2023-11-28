import Accesorios from "../../models/Accesorios.js";

let read = async (req, res, next) => {
    try {
       let queries = {}
       let pagination = {page: 1, limit: 18};
       
       if (req.query.page) {
        pagination.page = req.query.page
       }
       if (req.query.limit) {
        pagination.limit = req.pagination.limit;
       }
       if (req.query.name){
        queries.name = new RegExp(req.query.name.trin(), 'i')
       }
       if (req.query.description) {
        queries.description = req.query.description
       }
       if (req.query.brand) {
        queries.description = new RegExp(req.query.brand.trin(), 'i')
       }

       let products = await Accesorios.find({queries})
        .sort({price: 1, name: 1, createdAt: 1})
        .skip(pagination.page > 0 ? (pagination.page - 1) * pagination.limit : 0)
        .limit(pagination.limit > 0 ? pagination.limit : 0)

        let counter = await Accesorios.countDocuments(queries)
        let pages = Math.ceil(counter/pagination.limit)
        let prevPage = pagination.page > 1 ? Number(pagination.page) -1 : 0
        let nextPage = pagination.limit < pages ? Number(pagination.page) + 1 : 0

        return res.status(201).json({
            success: true,
            message: 'Products finded sucessfully',
            response: products,
            pages,
            prevPage,
            nextPage
        })

    } catch (error) {
        return next(error)
    }

}

export default read;