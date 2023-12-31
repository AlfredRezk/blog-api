const swaggerAutogen = require('swagger-autogen')()

swaggerAutogen('./swagger.json', ['./index.js'], {info: {titl: 'Blog platform API'}})