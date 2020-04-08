const {Pool , Client} = require('pg')
const connectionString='postgresql://appUser:alamin@localhost:5432/application'
const jwt = require('jsonwebtoken')
const client= new Client({
    connectionString:connectionString
})
const bcrypt= require('bcryptjs')
client.connect()


const register= (req, res)=>{
    console.log(req.body)
    const {name , email , password, contactnumber ,description} = req.body
    console.log(name, email, password, contactnumber, description)
    if(!name ||!email||!password||!contactnumber||!description){
        return res.status(400).json({massage:"Please  Fillup all Required Data"})
    }

    client.query('SELECT * from user_table where email=$1',[email],(err, result)=>{
        if(err){
            return res.status(500).json({massage:"Server erro"})
        }
        if(result.rowCount>0){
            return res.status(400).json({massage:"This  Email Already Exist"})
        }
        
        bcrypt.hash(password,13,(err, hash)=>{
            if(err){
                console.log(err)
                return res.status(500).json({massage:"Server error in  hash time"})
            }
            
        client.query("INSERT INTO user_table (name,email,password,description,contactnumber) VALUES($1,$2,$3,$4,$5)" ,[name, email,hash,description,contactnumber ],(err,result)=>{
            if(err){
                console.log(err)
                return res.status(500).json({massage:"Server err occurd"})
            }
            res.json({massage:'Registered Successfull !'})
        })
        })
    })

    
    
}

const login=(req, res)=>{
    console.log(req.body)
    const {email, password} = req.body
    if(!email||!password){
        return res.status(400).json({error:"Please Provide Email and Password"})
    }
    client.query('SELECT * FROM user_table WHERE email=$1',[email],(err,result)=>{
        if(err){
            console.log(err)
            return res.status(500).json({massage:"Server error occurd "})
        }
        if(result.rowCount<1){
            return res.status(400).json({error:"User Not Exist "})
        }
        bcrypt.compare(req.body.password , result.rows[0].password,(err,success)=>{
            if(err){
                console.log(err)
                return res.status(500).json({error:"Server error occurd "})
            }
            if(!success){
                return res.status(400).json({error:"Password Does Not Match"})
            }
            const token = jwt.sign({
                name:result.rows[0].name,
                email:result.rows[0].email,
                contactnumber:result.rows[0].contactnumber,
                description:result.rows[0].description
            },'secret',{expiresIn:'2h'}) 
            res.status(200).json(token)
        })  
    })
}

module.exports={
    register,
    login
}