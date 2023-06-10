const jwt = require("jsonwebtoken");

const checkToken = async (req, res, next) => {
    const authHeader = req.header("Authorization");
    const token = authHeader && authHeader.split(" ")[1];
    try {
        const decoded = jwt.verify(token, "123456");
        req.user = decoded.user;
        next();
    } catch (error) {
        console.log(error.message);
    }
};
