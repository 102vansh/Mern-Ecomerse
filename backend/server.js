const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const cookieparser = require('cookie-parser');
const{errormiddleware} = require('./middleware/error')
const cloudinary = require('cloudinary').v2;
const fileupload = require('express-fileupload');
require('./db/conn')
const orderroute = require('./routes/order.route')
const app  = express()
const userrouter = require('./routes/user.route')
const productrouter = require('./routes/product.route')
dotenv.config({ path: './dotenv/config.env' });

const port = process.env.PORT 

app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
}))
cloudinary.config({ 
    cloud_name: 'dysapzsm4', 
    api_key: '872647735318549', 
    api_secret: 'guwZRM21cXqj7oUeoc9VHU0ULOo' 
  });
app.use(cookieparser())
app.use(fileupload({
    useTempFiles: true,
    tempFileDir: '/tmp/',
}))

app.use('/api/v1/user', userrouter)
app.use('/api/v1/product', productrouter)
app.use('/api/v1/order', orderroute)
app.use(errormiddleware)
app.listen(port, () => console.log(`Server running on port ${port}`))