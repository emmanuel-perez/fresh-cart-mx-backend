import { Request, Response } from "express";
import { UserModel } from "../../models";

export const createUserService = async (req: Request, res: Response) => {
    try {
        const { id, _id, ...body } = req.body;
        const newUser = await UserModel.create({ ...body });
        return res.json( newUser );
    } catch (error) {
        return res.status(500).json({
            error
        })
    }

}







