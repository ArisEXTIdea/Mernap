const express = require('express');

const app = express();

const productsRouter = require('./src/routes/products')

app.use('/', productsRouter);

app.listen(4000);