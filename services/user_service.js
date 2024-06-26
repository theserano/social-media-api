 import bcrypt from "bcrypt";
import userModel from "../models/user.model.js";


export const updateUser = async (userId, updateData) => {
    if(updateData.password){
        try {
            updateData.password = await bcrypt.hash(updateData.password, 10);
        } catch (error) {
            throw error
        }
    }
    try {
        const user = await userModel.findByIdAndUpdate(userId, {
            $set:updateData
        }, {
            new: true,
        });
        return user;
    } catch (error) {
        throw error
    }
}

export const deleteUser = async (userId) => {
  try {
    await userModel.findByIdAndDelete( userId,);
  } catch (error) {
    throw error;
  }
};

export const getUser = async (userId) => {
    try {
        const user = await userModel.findById(userId);
        return user;
    } catch (error) {
        throw error;
    }
}

export const followUser = async (userData, updateData) => {
    if(userData.userId !== updateData.id){
        try {
            const user = await userModel.findById(userData.userId);
            const currentUser = await userModel.findById(updateData.id);
            if(!user.followers.includes(userData.userId)){
                await user.updateOne({ $push: { followers: updateData.id } });
                await currentUser.updateOne({$push: {followings: userData.userId}});
                return {user, currentUser};
            }else{
                throw new Error ("You have already followed this user");
            }
        } catch (error) {
            throw error
        }
    }else{
        throw new Error ("You cannot follow yourself!");
    }
}

export const unFollowUser = async (userData, updateData) => {
    if(userData.userId !== updateData.id){
        try {
            const user = await userModel.findById(userData.userId);
            const currentUser = await userModel.findById(updateData.id);
            if(!user.followers.includes(userData.userId)){
                await user.updateOne({ $pull: { followers: updateData.id } });
                await currentUser.updateOne({$pull: {followings: userData.userId}});
                return {user, currentUser};
            }else{
                throw new Error ("You have don't follow this user");
            }
        } catch (error) {
            throw error
        }
    }else{
        throw new Error ("You cannot unfriend yourself!");
    }
}