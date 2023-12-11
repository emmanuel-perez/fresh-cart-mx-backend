import { RoleModel } from "../../models"

export const validateRoleUnique = async ( roleType: string ) => {
    const roleExists = await RoleModel.find({ type: roleType });
    if ( roleExists ) throw new Error(`Role ${ roleType } already exists in collection ${ RoleModel.collection.name }`)
}