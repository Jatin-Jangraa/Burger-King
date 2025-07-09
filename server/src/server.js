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


app.get("/",(req,res)=>{res.send("HELLO WORLD")})



app.listen( PORT  ,()=>{
    console.log(`Express is runnung on Port ${PORT}`);
    
})
