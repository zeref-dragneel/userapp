const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const path  = require('path')
app.use(express.static(__dirname+'/public'))
app.get('/*', (req, res) => res.sendFile(path.join(__dirname)))
app.get("/api/home",(req,res)=>res.json({"msg":"hello form server"}))

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
