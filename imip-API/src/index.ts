import { config as configDotenv } from 'dotenv';
import express from 'express';
import morgan from 'morgan';

import setupSwagger from './config/swagger';
import { MedicoRouter } from './routes';

configDotenv();

const PORT: number = parseInt(process.env.PORT as string, 10 ) || 8080;

const app = express();

// JSON Middleware & Form Data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

// Main Routes
app.use('/', MedicoRouter);

setupSwagger(app);

app.use(( req, res)=>{
    res.status(500).send("Erro 500!");
});

app.listen(PORT, () => {
    console.log(`Listening on PORT ${PORT}`);
});