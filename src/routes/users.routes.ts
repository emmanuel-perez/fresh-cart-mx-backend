import { Router } from "express";
import { createUser, deleteUser, getAllUsers, getUserById, updateUser } from "../controllers";
import { check } from "express-validator";
import { validateDocumentIdExists, validateDocumentStatus, validateEmailUnique, validateFields, validateJWT } from "../middlewares";
import { UserModel } from "../models";

export const usersRoutes = Router();

usersRoutes.get('/', getAllUsers );
usersRoutes.get('/:id', [
    validateJWT,
    check('id').custom( (id: string) => validateDocumentIdExists( id, UserModel ) ),
    check('id').custom( (id: string) => validateDocumentStatus( id, UserModel ) ),
    validateFields
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
    validateJWT,
    check('id').custom( (id: string) => validateDocumentIdExists( id, UserModel ) ),
    check('id').custom( (id: string) => validateDocumentStatus( id, UserModel ) ),
    validateFields
], updateUser );
usersRoutes.delete('/:id', [
    validateJWT,
    check('id').custom( (id: string) => validateDocumentIdExists( id, UserModel ) ),
    check('id').custom( (id: string) => validateDocumentStatus( id, UserModel ) ),
    validateFields
],deleteUser );

