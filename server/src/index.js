const express = require('express');

const errorHandlerDefault = require("./server/errorHandlers/errorHandlerDefault");
const errorHandlerJWT  = require("./server/errorHandlers/errorHandlerJWT");
const errorHandlerCasl  = require("./server/errorHandlers/errorHandlerCasl");
const errorHandlerSequelize  = require("./server/errorHandlers/errorHandlerSequelize");
const errorHandlerBcrypt  = require("./server/errorHandlers/errorHandlerBcrypt");
const errorHandlerMulter  = require("./server/errorHandlers/errorHandlerMulter");

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
    errorHandlerMulter,
    errorHandlerDefault,
);





const mongoose = require('mongoose');
//mongoose.connect('mongodb://localhost:27017', { useNewUrlParser: true });

const server = require('http').Server(app);
const io = require('socket.io').listen(server);

const { User } = require('./server/models/index');

const db = require('./server/models');
const Op = db.sequelize.Op;

io.on('connection', function (socket) {
    socket.emit('connected', { text: 'Your connected !' });
    console.log('user connection');

    socket.join('all');
    socket.on('msg', content => {
        io.to('all').emit('new message', content)
    });

    socket.on('find users', async value => {
        console.log(value);
        const users = await User.findAll({
            where: {
                displayName: {
                    [Op.iLike]: `%${value.data}%`
                }
            },
            raw: true,
            attributes: {
                exclude: ['password','updatedAt', 'createdAt']
            },
            order: [['firstName', 'ASC']]
        });

        socket.emit('finded user', users)
    });

    socket.on('disconnect', reason => {
        console.info('user disconnect:', reason)
    })
});






server.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));
