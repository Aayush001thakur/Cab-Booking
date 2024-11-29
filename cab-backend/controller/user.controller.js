const userService = require("../services/user.service")
const { userToToken, saveToken } = require("../services/token.service")
const { tokenTypes } = require("../config/tokens")
const catchAsync = require("../utils/catchAsync")

const httpStatus = require("http-status")


const userRegisterController = catchAsync(async (req, res) => {

  const newUserToken = await userService.resgisterService(req.body)

  if (!newUserToken) res.json({ error: "something went wrong" })
  res.json({
    status: 200,
    message: "an email sended to your email acount to verify.",
    token: newUserToken
  })
})

const userLoginController = catchAsync(async (req, res, next) => {
  // next("my generated error")
  const userStatus = await userService.loginService(req.body)

  res.status(200).send({ status: 200, message: "login succesfully", data: userStatus })
})

const verifyAccount = catchAsync(async (req, res) => {
  const user = await userService.verifyAccount(req.body.token)
  res.status(200).send({ success: "your account succcesfully verified !" })
}
)


const profileImage = catchAsync(async (req, res) => {
  console.log("bjhbd", req.file)
  const profile_url = req.file.path
  const newProfile = await userService.setProfileImage(req.user._id, profile_url)
  delete newProfile["password"]
  res.status(httpStatus.OK).send({ status: 200, message: "profile image saved successfully" })
})


const resetPasswordController = catchAsync(async (req, res) => {
  const newToken = await saveToken(tokenTypes.RESET_PASSWORD, req.user._id)
  res.json({ token: newToken.token })
})


const forgotPasswordController = catchAsync(async (req, res) => {
  const newToken = await userService.forgotPasswordService(req.body.email)
  res.json({ token: newToken.token })
})

const verifyAndReSavePasswordController = catchAsync(async (req, res) => {
  const user = await userService.verifyAndReSavePassword(req.body.token, req.body.password)
  res.json({ user: user })
}
)


const getMyProfile = catchAsync(async (req, res) => {
  const userId = req.user
  console.log({userId})
  const profile = await userService.getProfileByUserId(userId._id)
  res.status(httpStatus.OK)
    .send({
      status: httpStatus.OK,
      message: "profile fetched successfully",
      data:profile
    })

})


const changeUserRole = catchAsync(async (req, res) => {
  const user = await userService.changeUserRole(req.user._id, req.body.role)
  
  res.status(httpStatus.OK).send({
    status:httpStatus.OK,
    message: "role changed succesfully",
    data:user
  })
})



const getMyCabBookingsAsPassanger = catchAsync(async (req, res) => {
  const user = req.user._id
  const getAllBokkings = await userService.getMyCabBookingsAsPassanger(user)
  res.status(httpStatus.OK).send({ status: 200, message: "your bookings as passanger", booking: getAllBokkings })
})


const ImageUploader = catchAsync(async (req, res) => {
  console.log(req.files)
  const files = req.files
  res.status(httpStatus.OK).send({ status: 200, message: "file uploaded succesfully", files })
})

module.exports = {
  profileImage,
  userRegisterController,
  userLoginController,
  resetPasswordController,
  forgotPasswordController,
  verifyAndReSavePasswordController,
  verifyAccount,
  changeUserRole,
  ImageUploader,
  getMyCabBookingsAsPassanger,
  getMyProfile
}