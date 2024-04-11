const express = require('express')
const app = express();
const swaggerUi = require('swagger-ui-express');
swaggerDocument = require('./swagger.json');  


//static browser content
app.use('/', express.static('public'))

app.use(express.json());

app.use('/api-docs',swaggerUi.serve,swaggerUi.setup(swaggerDocument));

const countryRoutes = require('./routes/countryRoutes');
app.use('/country',countryRoutes)

module.exports = app;
 