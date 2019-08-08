const express = require('express');
const router = require("./server/router/index");
const { PORT } = require("./server/utils/consts");
const cors = require('cors');

const app = express();

app.use(cors());

app.use(express.json());

app.use(router);



app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));
