import * as jwt from 'jsonwebtoken'

function authenticate(req,res,next){
  try
  {
    const token = req.headers.authorization.split(" ")[1]
    jwt.verify(token,process.env.Super_Secret)
    next()
  }catch(ex){
    res.status(401).json({
      message: "Not Authorized"
    })
  }
}

export default authenticate
