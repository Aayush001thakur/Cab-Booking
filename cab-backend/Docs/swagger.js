const swaggerJsdoc = require("swagger-jsdoc")


const options = {
  definition: {
    openapi: "3.1.0",
    info: {
      title: "Cabshare Express API with Swagger",
      version: "0.1.0",
      description:
        "This is a simple CRUD API application made with Express and documented with Swagger. in this swagger we have many api that manage  user,driver,cab booking",
      license: {
        name: "MIT",
        url: "https://spdx.org/licenses/MIT.html",
      },
      contact: {
        name: "Cabshare",
        url: "https://cabshare.com",
        email: "info@email.com",
      },
    },
    servers: [
      {
        url: `http://localhost:3779/api`,
      },
    ],
  },
  apis: ["./Docs/*.yml","./routes/*.js"],
};

module.exports = swaggerJsdoc(options);
