import { Router } from "express";
import { createUser, deleteUser, getAllUsers, getUserById, updateUser } from "../controllers";
import { check } from "express-validator";
import { validateDocumentIdExists, validateDocumentStatus, validateEmailUnique, validateFields } from "../middlewares";
import { UserModel } from "../models";

export const usersRoutes = Router();

usersRoutes.get('/', getAllUsers );
usersRoutes.get('/:id', [
    check('id').custom( (id: string) => validateDocumentIdExists( id, UserModel ) ),
    check('id').custom( (id: string) => validateDocumentStatus( id, UserModel ) ),
], getUserById );
usersRoutes.post('/', [
    check('email').not().isEmpty(),
    check('email').custom( validateEmailUnique ),
    check('email').isEmail(),
    check('password').not().isEmpty(),
    check('password').isLength({ min: 6 }),
    validateFields
], createUser );
usersRoutes.put('/:id', [
    check('id').custom( (id: string) => validateDocumentIdExists( id, UserModel ) ),
    check('id').custom( (id: string) => validateDocumentStatus( id, UserModel ) ),
], updateUser );
usersRoutes.delete('/:id', [
    check('id').custom( (id: string) => validateDocumentIdExists( id, UserModel ) ),
    check('id').custom( (id: string) => validateDocumentStatus( id, UserModel ) ),
],deleteUser );

