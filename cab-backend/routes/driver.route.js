const express = require("express")
const { driverController } = require("../controller")
const Auth = require("../middlewares/auth")

const driverValidations=require("../validations/driver.validation")
const bookingValidation=require("../validations/booking.validation")
const validate = require("../middlewares/validate")

const routes = express.Router()

// console.log(Auth,driverController.driverRegisterController)
routes.route("/")
    .patch(Auth, validate(driverValidations.driverProfileUpdateValidation) , driverController.driverUpdateController)
    .get(Auth, driverController.getDriverController)
    .delete(Auth, driverController.deleteDriverController)
    //  .post(Auth, driverController.driverRegisterController)
    
routes.route("/mybookings")
.get(Auth,driverController.driverBookingByBookingId)

routes.route("/mybookings/:bookingId")
.get(Auth,validate(bookingValidation.getBookingByIdValidation),driverController.driverBookingByBookingId)
module.exports = routes




/**
 * @swagger
 * tags:
 *   name: driver management
 *   description: driver api management with login
 */



/**
 * @swagger
 *  /driver:
 *   patch:
 *     summary: update your driving profile
 *     description: update your driving profile
 *     tags: [driver management]
 *     security:
 *       - bearerAuth: []
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
 *               description:
 *                 type: string
 *               from:
 *                 type: object
 *                 description: must be valid address
 *               to:
 *                 type: object
 *                 description: must be valid address
 *               vehicle:
 *                 type: string
 *                 description: vehicle type like car ,auto ,bus ,eco
 *               vehicleDetails:
 *                 type: string
 *                 description: must be correct details of your vehicle
 *               disbursedAt:
 *                 type: object
 *                 description: starting time 
 *               ariveAt:
 *                 type: object
 *                 description: arive time 
 *               days:
 *                 type: array
 *                 description: days 
 *               license: 
 *                 type: boolean
 *     responses:
 *       "200":
 *         description: OK
 *   get:
 *     summary: get your driving profile
 *     description: get your driving profile
 *     tags: [driver management]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       "200":
 *         description: OK
 *   delete:
 *     summary: delete your driving profile
 *     description: delete your driving profile change role to user
 *     tags: [driver management]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       "200":
 *         description: OK
 */

/**
 * @swagger
 *  /driver/mybookings:
 *   get:
 *     summary: get your booking as driver profile
 *     description: update your driving profile
 *     tags: [driver management]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       "200":
 *         description: OK
 */

/**
 * @swagger
 *  /driver/mybookings/{bookingId}:
 *   get:
 *     summary: get your booking as driver profile
 *     description: get booking with booking id
 *     tags: [driver management]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: bookingId
 *     responses:
 *       "200":
 *         description: OK
 */