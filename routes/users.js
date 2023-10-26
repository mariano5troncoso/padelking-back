import express from 'express';
import create from '../controllers/users/create.js';
const router = express.Router();


router.post('/', create)
/* router.get('/',(rep,res)=>{
  //logica para leer los usuarios
  // metodo mongoose .find() .findOne() .findId()
})
router.put('/:id',(rep,res)=>{
  //logica para actualizar usuario
  // metodo .findByIdAndUpdate()
})
router.delete('/:id',()=>{
  //logica necesaria para eliminar usuario  
  // .findByIdAndDelete()
}) */
export default router;
