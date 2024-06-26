import {
  createPost,
  deletePost,
  getAllPosts,
  getPost,
  getTimelinePost,
  likeAndDislike,
  updatePost,
} from "../services/post_service.js";

export const createPostController = async (req, res) => {
    try {
        const newPost = await createPost(req.body);
        res.status(200).json({
            newPost,
            message: "Post has been created successfully",
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Post creation failed",
            error,
        });
    }
}

export const updatePostController = async (req, res) => {
    try {
        const updatedPost = await updatePost(req.params,req.body);
        res.status(200).json({
            updatedPost,
            message: "Post has been updated successfully",
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Post update failed",
            error,
        });
    }
}

export const deletePostController = async (req, res) => {
    try {
        const deletedPost = await deletePost(req.params,req.body);
        res.status(200).json({
            deletedPost,
            message: "Post has been deleted successfully",
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Post deletion failed",
            error,
        });
    }
}

export const likeAndDislikePostController = async (req, res) => {
    try {
        const post = await likeAndDislike(req.params, req.body);
        res.status(200).json({
          post,
          message: "Post like or dislike action successful",
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "post like or dislike action failed",
            error,
        });
    }
}

export const getPostController = async (req, res) => {
    try {
        const post = await getPost(req.params);
        res.status(200).json({
          post,
          message: "Post has been fetched successfully",
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "post fetch failed",
            error,
        });
    }
}

export const getTimelinePostsController = async (req, res) => {
  try {
    const posts = await getTimelinePost(req.params);
    res.status(200).json({
      posts,
      message: "Timeline Post fetched Successfully",
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Post fetch failed",
      err,
    });
  }
};

export const getAllPostsController = async (req, res) => {
  try {
    const posts = await getAllPosts();
    res.status(200).json({
      posts,
      message: "Posts have been fetched Successfully",
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Posts fetch failed",
      err,
    });
  }
};