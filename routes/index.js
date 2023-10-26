import express from 'express';
import userRouter from './users.js'


const router = express.Router();

router.use('/auth', userRouter) // Le pido a mi enrutador principal a utilizar las rutas del enrutador con el endpoint auth
//router.use('/products', productsRouter)
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

export default router;
