const express = require('express')
const app = express()
const port = 5000

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://Jimin:qwer1234@meaning.bm8ak.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',{useNewUrlparser:true, useUnifiedTopology:true,useCreateIndex:true, useFindAndModify:false}).then(()=>console.log('MongoDB Connected...')).catch(err => console.log(err))

app.get('/',(req,res) => res.send('Hello Wordl!'))

app.listen(port,()=>console.log(`Example app listening on port ${port}!`))