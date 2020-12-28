const jwt = require('jsonwebtoken');

function VerifyToken(req, res, next) {
  // Get token from header
  const token = req.headers.authorization;
  // Check if not Token
  if (!token) {
    return res.status(401).json({ msg: 'No token, Authorization denied' });
  }

  // verify token

  try {

    jwt.verify(token, 'secret', function(err, decoded) {
      if (err) {
          return res.status(401).json({"error": true, "message": 'Your session has been expired.' });
      }
      req.user = decoded;
      next();
    });
  } catch (err) {
    // res.status(401).json({ msg: 'Invalid Token' });
    res.status(401).json({ msg: err });
  }
}

function authRole(role){
  return (req, res, next) => {
    if(req.user.accountType !== role){
      res.status(401);
      return res.send('Not Allowed')
    }
    next()
  }
}
module.exports = {
  VerifyToken,
  authRole
}