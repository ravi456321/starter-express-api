import jwt from "jsonwebtoken";

const jwtAuth = (req, res, next) => {

  const tokenHeader = req.cookies.jwtToken;
  if (!tokenHeader) {
    return res.status(401).json({ success: false, msg: "No token provided" });
  }
  try {
    const payload=jwt.verify(tokenHeader, "sdfguibn");
    req.user=payload.id;
    next();
  } catch (err) {
    console.log(err);
    return res.status(401).json({ success: false, msg: "Token is invalid" });
  }
};

export default jwtAuth;
