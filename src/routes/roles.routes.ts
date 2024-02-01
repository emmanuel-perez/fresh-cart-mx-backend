import { Router } from "express";
import { check } from "express-validator";
import { validateDocumentIdExists, validateDocumentStatus, validateFields, validateJWT, validateRoleUnique } from "../middlewares";
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
    validateJWT,
    check('type', 'type field is required').not().isEmpty(),
    check('type').custom(( type: string ) => validateRoleUnique( type ) ),
    validateFields,
], createRole );
rolesRoutes.put('/:id', [
    validateJWT,
    check('id').custom(( id: string ) => validateDocumentIdExists( id, RoleModel ) ),
    check('id').custom(( id: string ) => validateDocumentStatus( id, RoleModel ) ),
    validateFields,
],updateRole );
rolesRoutes.delete('/:id', [
    validateJWT,    
    check('id').custom((id: string) => validateDocumentIdExists( id, RoleModel ) ),
    check('id').custom(( id: string ) => validateDocumentStatus( id, RoleModel ) ),
    validateFields,
], deleteRole );










