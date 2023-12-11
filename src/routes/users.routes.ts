import { Router } from "express";
import { createUser, deleteUser, getAllUsers, getUserById, updateUser } from "../controllers";

export const usersRoutes = Router();

usersRoutes.get('/', getAllUsers );
usersRoutes.get('/:id', getUserById );
usersRoutes.post('/', createUser );
usersRoutes.put('/:id', updateUser );
usersRoutes.delete('/:id', deleteUser );

