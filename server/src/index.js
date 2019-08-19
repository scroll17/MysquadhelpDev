const express = require('express');
const errorHandler = require("./server/middlewares/errorHandler");
const router = require("./server/router/index");
const { PORT } = require("./server/utils/consts");
const cors = require('cors');

const app = express();

app.use(cors());

app.use(express.json());

app.use('/api', router);

app.use(errorHandler);

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));
