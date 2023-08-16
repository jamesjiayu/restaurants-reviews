import express from 'express'
import cors from 'cors'
import restaurants from './api/restaurants.route.js'

const app=express()
app.use(cors())
app.use(express.json())
app.use("/api/v1/restaurants",restaurants)
app.use("*", (req,res)=>res.status(400).json({error: "not found"}) )

export default app
// {
//     "restanrant_id": "5eb3d668b31de5d588f42933",
//     "text":"haha",
//     "user_id": "7777777", 
//     "name":"j"
//     }