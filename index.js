const express = require("express")
const app = express()
const port = 3000

const fruitRoutes = require("./routes/fruitRoutes") 
const vegRoutes = require('./routes/vegetableRoutes')


app.use(express.json())

app.get('/', (req, res) =>{

    res.json({message:"Yes, you pinged me and I work"})

})

app.use('/fruits', fruitRoutes)
app.use('/vegetables', vegRoutes)


app.listen(port, ()=>{

    console.log("The server is running");
})
