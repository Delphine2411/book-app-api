const jwt = require('jsonwebtoken');

const generateToken = (user) => {

    return jwt.sign({ id: user._id }, 'secret_key', { expiresIn: '1h' });

};

const authMiddleware =(req, res, next) =>{
    const token =req.header("Authorization");
    if (!token) return res.status(401).json({message:"accès interdit"}); 
    try {
        const verified = jwt.verify(token, "secret_key");
        req.user = verified
        next();
    } catch (error) {
        res.status(400).json({message: "Token invalid"})
    }
};