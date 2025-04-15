import jwt from "jsonwebtoken";
import { TOKEN_SECRECT } from "../config.js";

export const authRequired = (req, res, next) => {
  const { token } = req.cookies;

  if (!token)
    return res.status(401).json({ message: "No token, authorization denied" });

  jwt.verify(token, TOKEN_SECRECT, (error, user) => {
    if (error) return res.status(403).json({ message: "Token is not valid" });

    req.user = user;

    next();
  });
};
