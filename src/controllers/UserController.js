import User from "../models/User.js";

// ? login user
const loginUser = async (req, res) => {
    res.json({ message: "login user" });
};

// ? signup user
const signupUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.signup(email, password);
        res.status(201).json(user);
    } catch (error) {
        res.status(400).json({
            error: error.message,
        });
    }
};

export { loginUser, signupUser };
