const jwt = require("jsonwebtoken")
const config = require("../config/config")

const { Token } = require("../model")


const userToToken = (userId, secret = config.jwt.secret) => {
  const payload = {
    sub: userId
  };
  return jwt.sign(payload, secret);
};



const tokenToUser = (token, secret = config.jwt.secret) => {
  try {
    return jwt.verify(token, secret)
  } catch (error) {
    return null
  }

}


const saveToken = async (tokenType, userid) => {
  const token = userToToken(userid)
  const savedToken = await Token.create({
    token,
    type: tokenType,
    user: userid
  })

  if (!savedToken) {
    throw new Error("token not found")
  }

  return savedToken
}

const findTokenByToken = async (token) => {
  const newtoken = await Token.findOne({ token })
  return newtoken
}


const deleteAllToken=async (user)=>{
 const deletedTokens= Token.deleteMany({user}).exec()
 return deletedTokens
}

module.exports = { userToToken, tokenToUser, saveToken , findTokenByToken,deleteAllToken }