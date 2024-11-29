const exp = require("express")
const Auth = require("../middlewares/auth")
const validate = require("../middlewares/validate")
const { userValidation } = require("../validations")
const uploader = require("../middlewares/fileUploader")
const mongoose = require("mongoose")
const routes = exp.Router()

const { userController } = require("../controller")


// routes.route("/test").get(async()=>{
// mongoose.connection.collections.users.findOne({verified: true}).then((res)=>{
//   console.log(res)
// })
// console.log(await mongoose.connection.collections.users.findOne())
// const mongoCon=mongoose.connection.models

// console.log(mongoose)


// })
// console.log({userController})
routes.route("/register")
  .post(validate(userValidation.userRegisterValidation), userController.userRegisterController)

routes.route("/verify-account")
  .post(validate(userValidation.verifyAccount), userController.verifyAccount)

routes.route("/login")
  .post(validate(userValidation.userLoginValidation), userController.userLoginController)


routes.route("/reset-password")
  .post(Auth, userController.resetPasswordController)

routes.route("/forgot-password")
  .post(validate(userValidation.userForgotPasswordValidation), userController.forgotPasswordController)


routes.route("/verify-reset-password").
  post(validate(userValidation.userVerifyPasswordValidation), userController.verifyAndReSavePasswordController)

routes.route("/profile")
  .get(Auth, userController.getMyProfile)



routes.route("/change/role")
  .patch(Auth, validate(userValidation.changeUserRoleValidation), userController.changeUserRole)

routes
  .route("/profile-image")
  .post(
    Auth,
    // validate(userValidation.profileImage),
    uploader.single("profile"),
    userController.profileImage
  )
routes
  .route("/image-uploader")
  .post(Auth, uploader.any("images"), userController.ImageUploader)


routes
  .route("/myCabBookings")
  .get(Auth, userController.getMyCabBookingsAsPassanger)




module.exports = routes






/**
 * @swagger
 * tags:
 *   name: User Section
 *   description: User Section 
 */



/**
 * @swagger
 * /user/register:
 *   post:
 *     summary: get users email
 *     description: get users email
 *     tags: [User Section]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - email
 *               - password
 *               - role
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *                 format: email
 *                 description: must be unique
 *               password:
 *                 type: string
 *                 format: password
 *                 minLength: 8
 *                 description: At least one number and one letter
 *     responses:
 *       "200":
 *         description: OK
 */


/**
 * @swagger
 * /user/verify-account:
 *   post:
 *     summary: verify account
 *     description: user verify account
 *     tags: [User Section]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - token
 *             properties:
 *               token:
 *                 type: string
 *     responses:
 *       "200":
 *         description: OK
 */




/**
 * @swagger
 * /user/login:
 *   post:
 *     summary: user login
 *     description: user/driver  login with their email
 *     tags: [User Section]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - password
 *             properties:
 *               email:
 *                 type: string
 *                 format: email
 *                 description: must be unique
 *               password:
 *                 type: string
 *                 format: password
 *                 minLength: 8
 *                 description: At least one number and one letter
 *     responses:
 *       "200":
 *         description: OK
 */




/**
 * @swagger
 * /user/forgot-password:
 *   post:
 *     summary: forgot password
 *     description: user/driver forgot pasword email
 *     tags: [User Section]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *             properties:
 *               email:
 *                 type: string
 *                 format: email
 *                 description: must be unique
 *     responses:
 *       "200":
 *         description: OK
 */



/**
 * @swagger
 * /user/reset-password:
 *   post:
 *     summary: reset password
 *     description: user/driver reset  pasword request
 *     tags: [User Section]
 *     responses:
 *       "200":
 *         description: OK
 */




/**
 * @swagger
 * /user/verify-reset-password:
 *   post:
 *     summary: verify reset password 
 *     description: user reset pasword verification with token,password
 *     tags: [User Section]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - token
 *               - password
 *             properties:
 *               token:
 *                 type: string
 *               password:
 *                 type: string
 *                 format: password
 *     responses:
 *       "200":
 *         description: OK
 */

/**
 * @swagger
 * /user/profile:
 *   get:
 *     summary: get my profile user  with driver proflie
 *     description: get my profile
 *     tags: [User Section]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       "200":
 *         description: OK
 */


/**
 * @swagger
 * /user/change/role:
 *   patch:
 *     summary: change role
 *     description: user/driver change role
 *     tags: [User Section]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - role
 *             properties:
 *               role:
 *                 type: string
 *     responses:
 *       "200":
 *         description: OK
 */




/**
 * @swagger
 * /user/profile-image:
 *   post:
 *     summary: update profile images 
 *     description: update profile images
 *     tags: [User Section]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         image/png:
 *           schema:
 *             type: string
 *             required:
 *               - profile
 *             properties:
 *               profile:
 *                 type: string
 *                 format: binary
 *     responses:
 *       "200":
 *         description: OK
 */


/**
 * @swagger
 * /user/myCabBookings:
 *   get:
 *     summary: get all booking as passangers
 *     description: get all bookings
 *     tags: [User Section]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       "200":
 *         description: OK
 */