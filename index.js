const express = require('express')
const app = express()
app.get('/',(req,res)=>res.json({message: 'Hello World itz Saatvik'}))
app.listen(process.env.PORT || 80)