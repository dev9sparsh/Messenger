import jwt from "jsonwebtoken";

const generateTokenAndSetCookie = (userId, res) => {
    const token = jwt.sign({ userId }, process.env.JWT_SECRET, { expiresIn: "15d" }); 

    res.cookie("jwt", token, {
        maxAge: 15 * 24 * 60 * 60 * 1000, // 15 days
        httpOnly: true, // cookie cannot be accessed by client side javascript
        sameSite: "strict", // cookie is not sent with cross-origin requests
        secure: process.env.NODE_ENV !== "development" ? true : false, // cookie is only sent over HTTPS
    })
};

export default generateTokenAndSetCookie;