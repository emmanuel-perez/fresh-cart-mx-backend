import { Request, Response } from "express";
import { UserModel } from "../../models";
import { hashSync } from 'bcrypt';

export const createUserService = async (req: Request, res: Response) => {
    try {
        const { id, _id, password, ...body } = req.body;
        const newUser = await UserModel.create({ ...body });
        newUser.password = hashSync( password, 10 );
        return res.json( newUser );
    } catch (error) {
        return res.status(500).json({
            error
        })
    }

}







