const express = require('express')

const app = express()

app.use(express.json())

//req.query pega os parametros ?numero=123&pessoa=matheus
//req.params pega os parametros passados aqui /:id
//req.body 

app.get('/',(req,res)=>{
    res.json({mensagem:'hello world'})
})

app.get('/editar/:id',(req,res)=>{
    const{id}=req.params
    res.json({mensagem:'hello world'})
})

app.listen(8080,function(){
    console.log('rodando')
})