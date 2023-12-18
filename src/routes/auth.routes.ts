import { Router } from "express";
import { googleLogin, loginUser } from "../controllers";
import { validateDocumentStatus, validateEmailUnique, validateFields } from "../middlewares";
import { check } from "express-validator";
import { UserModel } from "../models";
import { validateEmailExists, validateUserStatusByEmail } from '../middlewares/db-validators';

export const authRoutes = Router();

authRoutes.post('/login', [
    check('email', 'email field is required').not().isEmpty().isEmail(),
    check('password', 'password field is required').not().isEmpty(),
    check('email').custom( validateEmailExists ),
    check('email').custom( validateUserStatusByEmail ),
    // check('id').custom( (id) => validateDocumentStatus( id, UserModel ) ),
    validateFields
], loginUser );


authRoutes.post('/google-login', [
    check('id_token', 'google token is required').not().isEmpty(),
    validateFields
], googleLogin );