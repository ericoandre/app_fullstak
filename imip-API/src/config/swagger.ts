const swaggerUi = require('swagger-ui-express');
const swaggerJSDoc = require('swagger-jsdoc');

import { Express } from 'express';

const PORT: number = parseInt(process.env.PORT as string, 10 ) || 8080;

// Swagger definition
const swaggerOptions = {
    swaggerDefinition: {
        openapi: '3.0.0',
        info: {
            title: 'My API',
            version: '1.0.0',
            description: 'API documentation using Swagger',
        },
        servers: [
            {
                url: `http://localhost:${PORT}`,
            },
        ],
   components: {
     securitySchemes: {
         bearerAuth: {
             type: 'http',
             scheme: 'bearer',
             bearerFormat: 'JWT', 
         },
     },
 },
    },
    apis: ['../routes/*.ts'], // Path to your API docs
};

const swaggerDocs = swaggerJSDoc(swaggerOptions);

const setupSwagger = (app: Express) => {
    app.use('/api/v1/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));
};

export default setupSwagger;