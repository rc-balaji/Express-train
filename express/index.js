const express = require('express')

const app = express();



const router = require('./router')



const cors = require('cors')


app.use(cors())
app.use(express.json())
app.use("/",express.static('public'))


app.use(router)





app.listen(3000,()=>{
    console.log("listening At 3000")
})