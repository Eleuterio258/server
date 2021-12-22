
const express = require('express')

const path = require('path');
require("dotenv/config")


const routeAuth = require('./Router/Auth.routes');
const routerUser = require('./Router/User.routes');
const routerProduct = require('./Router/Product.routes');
const routerCategory = require('./Router/Category.routes');
const routerOrder = require('./Router/Order.routes');

const app = express();
const server = require('http').createServer(app);
module.exports.io = require('socket.io')(server);
require('./Sockets/SocketOrderDelivery');


app.use(express.json());
app.use(express.urlencoded({
    extended: false
}));

app.use('/api', routeAuth);
app.use('/api', routerUser);
app.use('/api', routerProduct);
app.use('/api', routerCategory);
app.use('/api', routerOrder);


app.use(express.static(path.join(__dirname, 'Uploads/Profile')));
app.use(express.static(path.join(__dirname, 'Uploads/Products')));

server.listen(process.env.APP_PORT, (err) => {
    if (err) throw new Error(err);
    console.log('server running in the port', process.env.APP_PORT);
});