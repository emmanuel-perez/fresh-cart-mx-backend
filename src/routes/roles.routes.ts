import { Router } from "express";
import { check } from "express-validator";
import { validateDocumentIdExists, validateDocumentStatus, validateDocumentUniqueName, validateFields } from "../middlewares";
import { RoleModel } from "../models";
import { createRole, deleteRole, getAllRoles, getRoleById, updateRole } from "../controllers";

export const rolesRoutes = Router();

rolesRoutes.get('/', getAllRoles );
rolesRoutes.get('/:id', [
    check('id').custom(( id: string ) => validateDocumentIdExists( id, RoleModel ) ),
    check('id').custom(( id: string ) => validateDocumentStatus( id, RoleModel ) ),
    validateFields,
],getRoleById );
rolesRoutes.post('/', [
    check('name', 'name field is required').not().isEmpty(),
    check('name').custom(( name: string ) => validateDocumentUniqueName( name, RoleModel ) ),
    validateFields,
], createRole );
rolesRoutes.put('/:id', [
    check('id').custom(( id: string ) => validateDocumentIdExists( id, RoleModel ) ),
    check('id').custom(( id: string ) => validateDocumentStatus( id, RoleModel ) ),
    validateFields,
],updateRole );
rolesRoutes.delete('/:id', [
    check('id').custom((id: string) => validateDocumentIdExists( id, RoleModel ) ),
    check('id').custom(( id: string ) => validateDocumentStatus( id, RoleModel ) ),
    validateFields,
], deleteRole );










