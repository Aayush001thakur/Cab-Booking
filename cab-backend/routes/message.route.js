const { messageController } = require("../controller")
const express = require("express")

const Auth=require("../middlewares/auth")

const routes = express.Router()



// get and post message for specific chat

routes.route("/chat/:recieverId")
    .post(Auth,messageController.sendMessage)
    .get(Auth,messageController.getChatMessage)


// get all chats["friends"]

routes.route("/chats")
    .get(Auth,messageController.getAllChats)



module.exports = routes


/**
 * @swagger
 * tags:
 *   name: handle message 
 *   description: conversation of driver or user with login
 */


/**
 * @swagger
 *  /message/chats:
 *   get:
 *     summary: get all chats 
 *     description: get all chats means get all user that communicate
 *     tags: [handle message]
 *     responses:
 *       "200":
 *         description: OK
 */





/**
 * @swagger
 *  /message/chat/:recieverId:
 *   post:
 *     summary: send message to specific chat 
 *     description: send message to chat with their user id
 *     tags: [handle message]
 *     responses:
 *       "200":
 *         description: OK
 *   get:
 *     summary: get message of specific chat
 *     description: get message of chat with their user id
 *     tags: [handle message]
 *     responses:
 *       "200":
 *         description: OK
 */