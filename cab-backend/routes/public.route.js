const { publicController } = require("../controller")
const express = require("express")

const validate=require("../middlewares/validate")

const Auth=require("../middlewares/auth")

const {driverValidation}=require("../validations")

const routes = express.Router()

routes.route("/driver")
    .post(Auth,publicController.getDrivers)

routes.route("/driver/:driverId")
    .post(Auth,publicController.getDriverById)


routes
.route("/address-suggestion")    
.get(validate(driverValidation.addressSuggetionValidation), publicController.getAddressSuggestion)

module.exports = routes






/**
 * @swagger
 * tags:
 *   name: Public api
 *   description: Public api management 
 */



/**
 * @swagger
 *  /public/driver:
 *   post:
 *     summary: get all driver with or without filter
 *     description: get all driver 
 *     tags: [Public api]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       "200":
 *         description: OK
 */


/**
 * @swagger
 *  /public/driver/{driverId}:
 *   get:
 *     summary: get sepecific driver
 *     description: get sepecific driver by driver id
 *     tags: [Public api]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: driverId
 *     responses:
 *       "200":
 *         description: OK
 */


/**
 * @swagger
 *  /public/address-suggestion:
 *   get:
 *     summary: get address suggetion
 *     description: get address suggetion
 *     tags: [Public api]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         name: query
 *       - in: query
 *         name: where
 *     responses:
 *       "200":
 *         description: OK
 */


