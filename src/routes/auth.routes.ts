import { Router } from "express";
import { loginUser } from "../controllers";
import { validateDocumentStatus, validateEmailUnique, validateFields } from "../middlewares";
import { check } from "express-validator";
import { UserModel } from "../models";
import { validateEmailExists, validateUserStatusByEmail } from '../middlewares/db-validators';

export const authRoutes = Router();

authRoutes.post('/login', [
    check('email', 'email field is required').not().isEmpty(),
    check('password', 'password field is required').not().isEmpty(),
    check('email').custom( validateEmailExists ),
    check('email').custom( validateUserStatusByEmail ),
    // check('id').custom( (id) => validateDocumentStatus( id, UserModel ) ),
    validateFields
], loginUser );