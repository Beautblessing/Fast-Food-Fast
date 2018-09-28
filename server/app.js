import express from 'express';

import bodyParser from 'body-parser';
import morgan from 'morgan';

const app = express();


//  Initializ and use routes
// const menusRoutes = require('./routes/menus');
const orderRoutes = require('./routes/orders');

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Routes which should handle requests
//  use routes

app.use('/api/v1/', (req, res) => {
    return res.status(200).json({
        success: true,
        message: 'Wecome to fast-food-fast API',
    });
});
app.use('/api/v1/orders', orderRoutes);

// app.use((req,res,next) => {
//     res.status(200).json({
//         message: 'Connected!'
//     });next();
// });

app.use((req, res, next) => {
    const error = new Error('Not found');
    error.status = 404;
    next(error);
});
//
app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message,
        },
    });
    next(error);
});

const port = process.env.PORT || 9000;

app.listen(port);

console.log(`Now listening on: http://localhost:${port}`);

export default app;
