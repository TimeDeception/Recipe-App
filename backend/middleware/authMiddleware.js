const restrictAccess = (allowedUserTypes) => (req, res, next) => {
  const userType = req.user?.userType || 'guest'; // Default to 'guest'
  if (!allowedUserTypes.includes(userType)) {
    return res.status(403).json({ message: 'Access denied' });
  }
  next();
};

module.exports = restrictAccess;