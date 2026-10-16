const express= require('express')
const app=express()
const path = require('path');

app.use(express.json());

const notes=[];

app.get('/',(req,res)=>{
    res.sendFile((path.join(__dirname,'./home.html')))

})

app.get('/notes',(req,res)=>{
    res.json(notes)
})

app.post('/notes',(req,res)=>{
    console.log("body----",req.body)
    const note=req.body.note;
    notes.push({note:note})
    res.status(201).json({message:'done',note})
})


app.post('/singnin',)


app.listen(5188,()=>{
    console.log("server created")
})
