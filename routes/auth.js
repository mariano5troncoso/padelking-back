import Router from 'express'
import User from '../models/User.js'
import read from '../controllers/auth/read.js'
import registerController from '../controllers/auth/registerController.js'
import login from '../controllers/auth/login.js'
import passport from '../middlewares/passport.js'
import signout from '../controllers/auth/signout.js'
import validator from '../middlewares/validator.js'
import userRegister from '../schemas/auth/register.js'
import accountExists from '../middlewares/accountExist.js'
import createHash from '../middlewares/createHash.js'
import userSignin from '../schemas/auth/userSigninSchemas.js'
import accounNoExist from '../middlewares/accounNoExist.js'
import passwordIsOk from '../middlewares/passwordIsOk.js';
import generateToken from '../middlewares/generateToken.js';
import forgotPasswordController from '../controllers/auth/forgotPasswordController.js';
import resetPasswordController from '../controllers/auth/resetPasswordController.js'
import signinToken from '../controllers/auth/signinToken.js'
import verify_email from '../controllers/auth/verify_email.js'


import express from 'express';
const router = express.Router();


let auth_router = Router()

auth_router.get('/', read)

//REGISTER
auth_router.post('/register', validator(userRegister), accountExists, createHash, registerController)

//LOGIN
auth_router.post('/login', validator(userSignin), accounNoExist, passwordIsOk, generateToken, login)

//LOGIN WITH TOKEN
auth_router.post('/logintoken', passport.authenticate('jwt', { session:false }), signinToken)

//LOGOUT
auth_router.post('/logout', passport.authenticate('jwt', { session:false }), signout)

//FORGOT PASSWORD
auth_router.post('/forgot-password', forgotPasswordController);

//RESET PASSWORD 
auth_router.post('/reset-password/:token', resetPasswordController);

//EMAIL VERIFICATION
auth_router.get("/verify/:verify_code", verify_email)

export default auth_router