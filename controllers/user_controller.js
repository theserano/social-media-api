import { deleteUser, followUser, getUser, unFollowUser, updateUser } from "../services/user_service.js";

export const updateUserController = async (req, res) => {
    if(req.body.userId === req.params.id || req.body.isAdmin){
        try {
            const user = await updateUser(req.params.id, req.body);
            res.status(200).json({
            user,
            message: "Account has been updated successfully",
            });
        } catch (error) {
            console.log(error);
            res.status(500).json(err);
        }
    }else {
        res.status(500).json({
          message: "you can only update your account",
        });
    }
}

export const deleteUserController = async (req, res) => {
     if (req.body.userId === req.params.id || req.body.isAdmin) {
         try {
           await deleteUser(req.params.id);
           res.status(200).json({
             message: "Account has been updated successfully",
           });
         } catch (error) {
           console.log(error);
           res.status(500).json(err);
         }
     }else{
        res.status(500).json({
          message: "you can only delete your account",
        });
     }
}

export const getUserController = async (req, res) => {
    try {
        const user = await getUser(req.params.id);
        if (!user) {
        res.status(400).json({
            user: "null",
            message: "user not found",
        });
        }
        const {password, ...data} = user._doc;
        res.status(200).json({
        data,
        message: "User found",
        });
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
}
export const followUserController = async (req, res) => {
    try {
        const data = await followUser(req.body, req.params);
        res.status(200).json({
        data,
        message: "User has been followed",
        });
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
}
export const unFollowUserController = async (req, res) => {
    try {
        const data = await unFollowUser(req.body, req.params);
        res.status(200).json({
        data,
        message: "User has been un-followed",
        });
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
}