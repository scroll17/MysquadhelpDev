const express = require('express');

const errorHandlerDefault = require("./server/errorHandlers/errorHandlerDefault");
const errorHandlerJWT  = require("./server/errorHandlers/errorHandlerJWT");
const errorHandlerCasl  = require("./server/errorHandlers/errorHandlerCasl");
const errorHandlerSequelize  = require("./server/errorHandlers/errorHandlerSequelize");
const errorHandlerBcrypt  = require("./server/errorHandlers/errorHandlerBcrypt");

const router = require("./server/router/index");
const { PORT } = require("./server/utils/consts");
const cors = require('cors');

const app = express();

app.use(cors());

app.use(express.json());

app.use('/api', router);

app.use(
    errorHandlerJWT,
    errorHandlerBcrypt,
    errorHandlerSequelize,
    errorHandlerCasl,
    errorHandlerDefault
);

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));
