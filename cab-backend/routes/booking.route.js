const express = require("express")
const { bookingController } = require("../controller")
const Auth = require("../middlewares/auth")

const validate = require("../middlewares/validate")
const bokingvalidation = require("../validations/booking.validation")

const routes = express.Router()

routes.route("/book/:driverId")
    .post(Auth, validate(bokingvalidation.bookingValidation), bookingController.bookNewCab)

// routes.route("/booking")


module.exports = routes



/**
 * @swagger
 * tags:
 *   name: booking management
 *   description: driver/cab booking as user api management with login
 */


/**
 * @swagger
 * /booking/book/{driverId}:
 *   post:
 *     summary: book new cab/driver
 *     description: book cab /driver
 *     tags: [booking management ,Public api]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: driverId
 *     responses:
 *       "200":
 *         description: OK
 */
