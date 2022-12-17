const express = require('express')
const path = require('path')
const bodyParser = require
const mongoose = require('mongoose')
const User = require('./model')
const bcrypt = require('bcryptjs')
const { error } = require('console')


mongoose.connect('mongodb://localhost:27017/login-app-db',{
    useNewUrlParser:true,
})

const app = express()
app.use('/', express.static(path.join(__dirname, 'static')))
app.use(bodyParser.json())

app.post('/api/Signup', async(req,res)=>{

    const{Email,password:plainTextPassword }=req.body

    if(!Name || typeof Name !== 'string'){
        return res.json({status:'error',error:'Invalid Name'})
    }

    if(!Email || typeof Email !== 'string'){
        return res.json({status:'error',error:'Invalid Email'})
    }

    if(!plainTextPassword || typeof plainTextPassword !== 'string'){
        return res.json({status:'error',error:'Invalid Password'})
    }
    if(password.length < 5){
        return res.json({
            status: 'error',
            error: 'Password too small. Should be atliast 6 character'
        })
    }

    if(!Number || typeof Number !== 'Number'){
        return res.json({status:'error',error:'Invalid Number'})
    }

    if(Number.length=10){
        return res.json({
            status: 'error',
            error: 'Number should be 10 digitsnumber'
        })
    }

    if(!Age || typeof Age !== 'Number'){
        return res.json({status:'error',error:'Invalid Age'})
    }

    if(!Adress || typeof Adress !== 'string'){
        return res.json({status:'error',error:'Invalid Adress'})
    }

    

    console.log(await bcrypt.hash(password,10))

    try{
       const response = await User.create({
            Name,
            Email,
            password,
            Number,
            Age,
            Adress
        })
        console.log('User created successfully:',response)
    }catch(error){
        if(error.code === 11000){

        }
        return res.json({ status:'error', error:'Data already exis”'})
    }
    throw error


    res.json({status:'ok'})
})
app.listen(9999, () =>{
    console.log('Server up at 9999')
})
 