const jwt = require("jsonwebtoken");

module.exports = function (req, res, nextr) {
  const token = req.header("x-auth-token");
  if (!token)
    return res.status(401).json({ msg: "No token, authorization denied" });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.usern = decoded.user;
    nextr();
  } catch (err) {
    res.status(401).json({ msg: "Token is not valid" });
  }
};
