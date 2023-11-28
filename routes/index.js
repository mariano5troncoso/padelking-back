import express from 'express';
import userRouter from './auth.js';
import accesorios_router from './accessories.js';

const router = express.Router();

// Monta las rutas del usuario bajo el prefijo /api/auth
router.use('/auth', userRouter);


// Ruta principal
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});


export default router;
