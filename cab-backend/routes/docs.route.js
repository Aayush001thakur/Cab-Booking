const express = require('express');
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const swaggerDefinition = require('../Docs/swagger');

const router = express.Router();

const specs = swaggerJsdoc({
  swaggerDefinition,
  apis: ['/docs/*.yml', './routes/*.js'],
});

router.use('/', swaggerUi.serve);
router.get(
  '/',
  swaggerUi.setup(specs, {
    explorer: true,
  })
);

module.exports = router;
