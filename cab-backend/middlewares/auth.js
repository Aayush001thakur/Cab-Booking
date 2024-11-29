const { tokenToUser } = require("../services/token.service")
const { User } = require("../model")
const e = require("express")


const Auth = async (req, res, next) => {
  // if (!req.headers.token) {
  //   // res.json({
  //   //   error: 'unauthorize request'
  //   // })

  //   const err= new Error("unauthorize request")
  //   next(err)
  // }

  // console.log(req.headers)

  let mytoken=req?.headers?.authorization?.split(" ")[1]
  if (!mytoken && !req.headers.authorization || !tokenToUser(mytoken) || tokenToUser(mytoken) == null && tokenToUser(mytoken) == "") {
    next(new Error("invalid token "))

  }
  else {
    console.log(tokenToUser(mytoken))
    const user = await User.findById(tokenToUser(mytoken).sub, { "__v": 0, "password": 0 })
    if (!user || user == null) {
      next(new Error("user not found"))
    }
    req.user = user
    next()
  }

}


module.exports = Auth