const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const Sequelize = require("sequelize");
const db = require('./db.js');
require('dotenv').config();
const router = require('./router/index.js');
const errorMiddleware = require('./middlewares/error-middleware.js');

const PORT = process.env.PORT || 5000;
const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(cors({
    credentials: true,
    origin: process.env.CLIENT_URL
}));
app.use('/api', router);
app.use(errorMiddleware);

const start = async () => {
    try {
        await db.sync();
        app.listen(PORT, () => console.log(`Server started on PORT = ${PORT}`));
    } catch (e) {
        console.log(e);
    }
}

start();