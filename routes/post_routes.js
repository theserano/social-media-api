import express from "express";
import { createPostController, deletePostController, getAllPostsController, getPostController, getTimelinePostsController, likeAndDislikePostController, updatePostController } from "../controllers/post_controllers.js";

const router = express.Router();


// create post
router.post("/create-post", createPostController);

// update post 
router.put("/update-post/:id", updatePostController);

// delete post
router.delete("/delete-post/:id", deletePostController);

// like and dislike
router.put("/like-post/:id", likeAndDislikePostController);

// get post
router.get("/get-post/:id", getPostController);

// get timeline post
router.get("/get-timeline-post/:username", getTimelinePostsController);

//getAllPosts
router.get("/", getAllPostsController);

export default router;