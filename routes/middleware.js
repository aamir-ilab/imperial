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
    const decoded = jwt.verify(token, 'secret');

    // @ts-ignore
    req.user = decoded.user;
    next();
  } catch (err) {
    // res.status(401).json({ msg: 'Invalid Token' });
    res.status(401).json({ msg: err });
  }
}

function authRole(role){
  return (req, res, next) => {
    if(req.user.accountType !== role){
      console.log('---Role---',role)
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