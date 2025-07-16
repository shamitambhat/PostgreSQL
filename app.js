const express = require('express');
const app = express()
const PORT = 3000
app.get('/', (req,res)=>{
    res.send('Hello World')
})

// no postman needed for get but nvm
app.get('/user/:username',(req,res)=>{
    const userid = req.params.username
    res.send(`Hello ${userid}`)
})

//post (in postman)
app.post('/users',express.json(),(req,res)=>{
    const {name , email }= req.body
    res.json(
        {
            message: `user ${name} with email ${email} created successfuly`
        }
    )
})
//put 
app.put('/users/:id',express.json() , (req,res)=>{
    const userid= req.params.id
    const {name , email}= req.body
    res.json({
        message: `user ${name} with email ${email} updated successfuly by adding id ${userid}`
})
})

//delete using postman only
app.delete('/users/:id',express.json() , (req,res)=>{
    const userid= req.params.id
    res.json({
        message: `user deleted successfuly with id ${userid}`
})
})


app.listen(PORT,()=>{
    console.log('Server is running on http://localhost:3000')
})