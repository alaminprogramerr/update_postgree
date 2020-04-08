const express= require('express')
const PORT  = process.env.PORT||5000
const applicationRouter= require('./router/applicationRouter')
const app = express()




app.use(express.json())
app.use(applicationRouter)








app.listen(PORT, ()=>{
    console.log('Server started on port on : ', PORT)
})





