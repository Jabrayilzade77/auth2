import jwt from 'jsonwebtoken'

 const TokenKey = "dcincmDJ#$^@9"

export const AuthMiddleWare = (role) => {
  return (req, res, next) => {
    try {
      let token = req.headers.authorization;
      console.log(token);
      if (!token || !token.startsWith("Bearer")) {
        return res.status(401).json({ message: "Unauth" });
      }
      console.log(token);
      token = token.slice(7)
     
      var decoded = jwt.verify(token, TokenKey);

      if (!role.includes(decoded.role)) {
        return res.status(401).json({ message: "u dont have access" });
      }
      req.esed = decoded
      next()
    } catch (error) {
        console.log(error);
        return res.status(401).json({message:error})
    }
  };

};
