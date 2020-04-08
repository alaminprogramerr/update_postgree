const {Pool , Client} = require('pg')
const connectionString = 'postgresql://appUser:alamin@localhost:5432/application'

const client= new Client({
    connectionString:connectionString
})
client.connect()



// get data 
const readApplication=(req,res)=>{
    client.query('SELECT * from application_data' , (err, result)=>{
        if(err){
            console.log(err)
            return res.status(500).json({massage:"Server error occurd in DB"})
        }
        res.status(200).json(result.rows)
    })
}
// edit data
const createApplication=(req,res)=>{
    
    // profilePicture:req.file.filename,
    // picturePath:req.file.path
    console.log('working')
    if(!req.body.title || !req.file || !req.body.description|| !req.file){
        return res.status(400).json({massage:"Pls fillup all required data !"})
    }
    const {title , description} = req.body
    const img= req.file.filename
    console.log(title, img, description)
    client.query("INSERT INTO application_data (title,img,description) VALUES($1,$2,$3)" ,[title,img,description ],(err,result)=>{
        if(err){
            console.log(err)
            return res.status(500).json({massage:"Server err occurd"})
        }
        res.json({massage:'Applicatin added successfull !'})
    })
}
// delete data
const deleteApplication=(req,res)=>{
    const id = req.params.id
    client.query('DELETE FROM application_data WHERE id=$1',[id],(err, result)=>{
        if(err){
            console.log(err)
            return res.status(500).json({massage:"Server err occurd"})
        }
        return res.status(200).json({massage:"Application deleted successfull !"})
    })

}

// update data
const editApplication=(req,res)=>{
    const{title,description,id}=req.body
    if(!title|| !description || !id){
        return res.status(500).json({massage:"Pls enter required information "})
    }
    client.query('UPDATE application_data SET title=$1 ,description=$2 WHERE id=$3',[title,description,id],(err,result)=>{
        if(err){
            console.log(err)
            return res.status(500).json({massage:"Server error occurd"})
        }
        console.log(result)
        return res.status(200).json({massage:"Application edited successfull !"})
    })
}

const getSingle=(req, res)=>{
    const id= req.params.id
    client.query('SELECT * FROM application_data WHERE id=$1',[id],(err, result)=>{
        if(err){
            console.log(err)
            return res.status(500).json({massage:"Server error occurd"})
        }
        if(result.rows.length<1){
            return res.status(200).json({massage:"Application not exist "})
        }
        return res.status(200).json(result.rows)
    })
}
module.exports={
    createApplication,
    readApplication,
    deleteApplication,
    editApplication,
    getSingle
}