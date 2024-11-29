const { tokenTypes } = require("../config/tokens")
const { User, Message, Text, Driver, Token, Booking } = require("../model")
const ApiError = require("../utils/apiError")

const { FRONTEND_URL } = require("../config/config")


const { saveToken, findTokenByToken, deleteAllToken, userToToken } = require("./token.service")
const { SendEmail } = require("./email.service")
const driverService = require("./driver.service")
const httpStatus = require("http-status")

const getUserByEmail = async (email) => {
  return await User.findOne({ email }, { "__v": 0 })
}


const getUserById = async (id) => {
  return await User.findById(id)
}

const getProfileByUserId=async (userId)=>{
  let userData={}
  const user= await User.findById(userId,{password:0,__v:0})
  Object.assign(userData,user._doc)
  if(user.role="driver"){
   const driverProfile=await driverService.getDriverByUserId(userId)
   userData["driverProfile"] = driverProfile
   
  }
  return userData
}

const resgisterService = async (user) => {
  const user2 = await getUserByEmail(user.email)
  if (user2) {
    throw new ApiError(400, "an account already exist with this email.")
  }

  const newUser = await User.create(user)
  if (!newUser) {
    throw new ApiError(500, "somthing wen wront")
  }
  const token = await saveToken(tokenTypes.VERIFY_EMAIL, newUser._id)

  const message = `
<div>
  <h3>hii ${user.name},</h3>
  <br>
  <br>
  <p>
    please verify your account to enjoy our service.
  </p>
  click here to verify now,
  <br>
  <a href="${FRONTEND_URL}?token=${token.token}" style="border:2px soled green;padding:5px;border-radius:3px">Verify
  </a>
  <br>
  <br>
  Thank you,
</div>
`

  SendEmail(user.email, "Verify email!", message)

  return token.token
}

const loginService = async (user) => {
  const myuser = await getUserByEmail(user.email)
  if (!myuser) {
    throw new ApiError(400, "user not found")
  }
  if (!(await myuser.isPasswordMatch(user.password))) {
    throw new ApiError(404, "wrong credentail")

  }
  if (!myuser.verified) {
    const token = await saveToken(tokenTypes.VERIFY_EMAIL, myuser._id)

    const message = `
<div>
  <h3>hii ${myuser.name},</h3>
  <br>
  <br>
  <p>
    please verify your account to enjoy our service.
  </p>
  click here to verify now,
  <br>
  <a href="${FRONTEND_URL}?token=${token.token}" style="border:2px soled green;padding:5px;border-radius:3px">Verify
  </a>
  <br>
  <br>
  Thank you,
</div>
`

    SendEmail(myuser.email, "Verify email!", message)
    console.log("user this token", token)

    throw new ApiError(401, "check your email account to verify!")
  }

  let userdata =await getProfileByUserId(myuser._id)

  return {
    userdata, token: userToToken(myuser._id)
  }

}


const verifyAccount = async (token) => {
  const newToken = await Token.findOne({ token, type: tokenTypes.VERIFY_EMAIL })
  if (!newToken) {
    throw new ApiError("invalid token or Token not found")
  }
  const user = await getUserById(newToken.user)
  if (!user) {
    throw new ApiError("user not found")
  }
  user.verified = true
  await user.save()
  deleteAllToken(newToken.user)
  return user
}




const forgotPasswordService = async (email) => {
  const user = await getUserByEmail(email)
  if (!user) {
    throw new ApiError("user not found")
  }
  const token = saveToken(tokenTypes.RESET_PASSWORD, user._id)
  if (!token) {
    throw new ApiError(httpStatus.INTERNAL_SERVER_ERROR,"somthing went wront")
  }

  return token
}

// const getMy


const verifyAndReSavePassword = async (token, password) => {
  const newtoken = await findTokenByToken(token)
  if (!newtoken) {
    throw new ApiError("token not found")
  }
  const user = await getUserById(newtoken.user)
  if (!user) {
    throw new ApiError("user not found")
  }
  user.password = password
  await user.save()
  deleteAllToken(newtoken.user)

  return user
}


const changeUserRole = async (user, role) => {
  const newRole = await User.findOne({ _id: user._id }, { __v: 0, password: 0, })
  newRole.role = role
  await newRole.save()

  if (role == "user") {
    await Driver.findOneAndUpdate({ user: user._id }, { $set: { isEnable: false } })

  }
  else if (role == "driver") {

    const driverprofile = await Driver.findOneAndUpdate({ user: user._id }, { $set: { isEnable: true } })
    console.log({ driverprofile })
    if (!driverprofile) {
      const profile = {
        user: user._id
      }
      await Driver.create(profile)
    }

  }


  return newRole
}




const getMyCabBookingsAsPassanger = async (user) => {
  return await Booking.find({ user })
}


const setProfileImage = async (user, profile_url) => {
  const myUser = await getUserById(user)
  myUser.profileImage = profile_url
  return await myUser.save()
}

module.exports = {
  resgisterService,
  loginService,
  forgotPasswordService,
  verifyAndReSavePassword,
  verifyAccount,
  getUserById,
  changeUserRole,
  setProfileImage,
  getMyCabBookingsAsPassanger,
  getProfileByUserId
}