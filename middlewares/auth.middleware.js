const jwt = require('jsonwebtoken')
const authMiddleware = (req, res, next) => {
  const token = req.header('Authorization')?.split(' ')[1];

  if (!token) {
    return res.status(401).json({ message: 'No token, authorization denied' });
  }

  try {
    console.log('Token received:', token); // Debugging log
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    console.error('Token verification failed:', error.message);
    return res.status(401).json({ message: 'Invalid token' });
  }
};
const authorize = function (roleName) {
  return function (req, res, next) {
 
    if (req.user && req.user.role == roleName) {
     
        console.log(roleName)
      return next();
    }
    else {
      return res.status(401).json({ message: "user is not authorized" });
    };
  };
}
module.exports = { authMiddleware, authorize };

