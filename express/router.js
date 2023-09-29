const express = require('express')


// const cors = require('cors')

// const eapp = express()

// eapp.use(cors())

var app = express.Router();
const Data=["User 1","User 2","User 3"]

const movie = {
    "James":"1999",
    "HM":"2999",
    "SM":"3999"
}

app.get('/get/:id',(req,res)=>{
    const id=req.params.id
    const {title,dir} = req.query
    // const dir = req.query.dir
    const data1 = movie[title]

    res.send({data:data1,dir:dir})
    console.log("Sent Successfully")
    
})
app.post('/post',(req,res)=>{
    const data = req.body

    console.log(data)
    console.log("Post Successfully")
    
    
})
app.delete('/delete/:id',(req,res)=>{
    const data = req.params.id
    
    console.log("Delete:"+data)
    console.log("Delete Successfully")
    
})
app.put('/put/:id',(req,res)=>{
    const id = req.params.id
    const data = req.body.text
    
    console.log(`ID:${id}\nData:${data}`)
    console.log("Update Successfully")
    
})

module.exports=app