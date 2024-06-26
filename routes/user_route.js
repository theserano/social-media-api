import express from "express";
import { deleteUserController, followUserController, getUserController, unFollowUserController, updateUserController } from "../controllers/user_controller.js";

const router = express.Router();

// update
// delete user
// get a user
router.route("/:id")
    .delete(deleteUserController)
    .put(updateUserController)
    .get(getUserController)

// follow a user
router.put("/follow/:id", followUserController);

// un-follow user
router.put("/un-follow/:id", unFollowUserController);

export default router;
