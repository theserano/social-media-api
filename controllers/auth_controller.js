import { loginUser, registerUser } from "../services/auth_service.js";

// register
export const register = async (req, res) => {
    try {
        const newUser = await registerUser(req.body);
        const {password, ...data} = newUser._doc;
        res.status(200).json({
            data, 
            message: "User has been registered successfully"
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            error: error,
            message: "Error occurred registering user"
        })
    }
}

export const login = async (req, res) => {
    try {
       const loggedInUser = await loginUser(req.body);
       res.status(200).json({
        message: "User logged in successfully",
        loggedInUser,
       });
    } catch (error) {
      console.log(error);
      res.status(500).send({
        error: error,
        message: "Error occurred logging user in",
      });
    }
}