import express from 'express'
import dotenv from 'dotenv'
dotenv.config()
import cors from 'cors'
import { userroute } from './Routes/User.route.js'
import connectdb from './Config/database.js'
import { productroute } from './Routes/Product.route.js'
import { locationfetch } from './Controller/Location.js'
import { orderroute } from './Routes/Order.route.js'
import { contact } from './Controller/Contact.controller.js'
import {  confirmOrder } from './Controller/Confirm.controller.js'
import { dashroute } from './Routes/Dashboard.route.js'


const app = express()


connectdb()

const PORT =process.env.PORT ||4000


app.use(express.json())
app.use(cors())






app.use("/api/v1/user" ,userroute)



app.use("/api/v1/product",productroute)


app.use("/api/v1/location" ,locationfetch)

app.use("/api/v1/order",orderroute)

app.use ("/api/v1/dashboard",dashroute)



app.post ("/api/v1/contact",contact)
app.post("/api/v1/confirm",confirmOrder)



app.use('/',(req,res)=>{res.send("HELLO WORLD")})



app.listen( PORT  ,()=>{
    console.log(`Express is runnung on Port ${PORT}`);
    
})












// PORT = 5000



// DATABASE= mongodb+srv://Burger:King@burgerking.9h3vykd.mongodb.net/?retryWrites=true&w=majority&appName=BurgerKing



// CLOUDINARY_CLOUD_NAME=dvkfvgzlp
// CLOUDINARY_API_KEY=748897747985641
// CLOUDINARY_API_SECRET=dwPeKxhctkSc_CxMXllhjFFG6Vo

// MY_EMAIL=jatin12468@gmail.com
// MY_APP_PASSWORD=fxqp xsxq jbqu mvdi
// # CLOUDINARY_URL=cloudinary://748897747985641:dwPeKxhctkSc_CxMXllhjFFG6Vo@dvkfvgzlp  not used