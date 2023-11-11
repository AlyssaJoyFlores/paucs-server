// dependencies
const express = require('express');
const dotenv = require('dotenv').config();
const cors = require('cors');
const fileUpload = require('express-fileupload');
const cloudinary = require('cloudinary').v2


// cloudinary
cloudinary.config({
    cloud_name:process.env.CLOUD_NAME,
    api_key:process.env.CLOUD_API_KEY,
    api_secret:process.env.CLOUD_API_SECRET
})


// imports
const errorHandler = require('./middleware/errorHandler');
const connectDb = require('./db/dbConnection');


// invoke
const server = express();


// middleware
server.use(cors()); // connection - to be able to connect client and server
server.use(express.json()); //passer - to be able to receive the data from the client into the server
server.use(express.urlencoded({ extended: true}));
server.use(fileUpload({useTempFiles:true}));
server.use(errorHandler);



// api routes
server.use('/api/announcements', require('./routes/announcementRouter'));
server.use('/api/products', require('./routes/productRouter'));
server.use('/api/orders', require('./routes/orderRouter'));


// server port
const port = process.env.PORT || 3000;

const startServer = async() => {
    try {
        await connectDb();
        server.listen(port, ()=> {
            console.log(`Server start listening on port ${port}`);
        });
    } catch (error) {
        console.log(error);
    }
   
};

startServer();

