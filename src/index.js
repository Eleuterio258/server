
const express = require('express')

const path = require('path');
require("dotenv/config")


const routeAuth = require('./router/Auth.routes');
const routerUser = require('./router/User.routes');
const routerProduct = require('./router/Product.routes');
const routerCategory = require('./router/Category.routes');
const routerOrder = require('./router/Order.routes');

const app = express();
const server = require('http').createServer(app);
module.exports.io = require('socket.io')(server);
require('./sockets/SocketOrderDelivery');


app.use(express.json());
app.use(express.urlencoded({
    extended: false
}));

app.use('/api', routeAuth);
app.use('/api', routerUser);
app.use('/api', routerProduct);
app.use('/api', routerCategory);
app.use('/api', routerOrder);


app.use(express.static(path.join(__dirname, 'uploads/Profile')));
app.use(express.static(path.join(__dirname, 'uploads/Products')));



module.exports= server;
