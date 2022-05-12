//este archivo lo hiciste tu paolichis
const { response, request } = require("express");
const express = require("express"); // modulo de express
const mongo = require("mongodb").MongoClient;
const cors=require('cors');
let ObjectId = require('mongodb').ObjectId;

const app = express(); // definimos una app de express
app.use(express.json()); //middleware en este caso sirve para interpretar el json 

//cross-origin-resource-sharing (cors)
app.use(cors({
    origin: '*'
}));

const url = "mongodb://localhost:27017"; //ruta de la db



let db,alumnos,autores,registros;
mongo.connect(url,{
    useNewUrlParser:true,
    useUnifiedTopology:true
},
(err, client) =>{
    if(err){
        console.log(err);
        return;
    }
    db=client.db("cursojavascript");
    console.log("Conectado a la DB♥");
    alumnos = db.collection("alumnos");
    autores = db.collection("Autores");
    registros = db.collection("Registro");
});

app.get("/demo", (request,response) =>{
    console.log("♥ Se ejecuto la ruta demo...");
    response.status(500).json({ok:true});

});

app.get("/alumnos", (request,response) =>{
    console.log("♥ Se ejecuto la ruta alumnos...");
    
    alumnos.find().toArray((err,items) => {
        if(err){
            console.log(err);
            response.status(500).json({err:err});
            return;
        }
        response.status(200).json({alumnos:items});        
    });
});

app.post("/alumnos", (request,response) =>{
    alumnos.insertOne(
        {
            nombre: request.body.nombre,
            apellido: request.body.apellido,
            ciudad: request.body.ciudad,

        },
        (err,result) => {
            if(err){
                console.log(err);
                response.status(500).json({err:err});
                return;
            }
            response.status(200).json({ok:true});        
        }
    )   
});

//obtener registros para actividad sign-in
app.get("/registros", (request,response) =>{
    console.log("♥ Se ejecuto la ruta para obtener los registros...");
    
    registros.find().toArray((err,items) => {
        if(err){
            console.log(err);
            response.status(500).json({err:err});
            return;
        }
        response.status(200).json({registros:items});        
    });
});

//obtener autores
app.get("/autores", (request,response) =>{
    console.log("♥ Se ejecuto la ruta para obtener los autores...");
    
    autores.find().toArray((err,items) => {
        if(err){
            console.log(err);
            response.status(500).json({err:err});
            return;
        }
        response.status(200).json({autores:items});        
    });
});
//agregar autores
app.post("/autores", (request,response) =>{
    autores.insertOne(
        {
            nombre: request.body.nombre,
            imagen: request.body.imagen,
            correo: request.body.correo,
            funcion: request.body.funcion,
            descripcion: request.body.descripcion,
            status: request.body. status,
            fechaingreso: request.body.fechaingreso 
        },
        (err,result) => {
            if(err){
                console.log(err);
                response.status(500).json({err:err});
                return;
            }
            response.status(200).json({ok:true});        
        }
    )   
});


app.get("/alumnos/:id", (request,response) =>{
    let alumnoId = request.params.id;
    alumnos.findOne({_id:ObjectId(alumnoId)}, function(err,alumno){
        if(err){
            console.log(err);
            response.status(500).json({err:err});
            return;             
        }
        response.status(200).json({alumno:alumno});                
    })
});


app.listen(3005,()=>{
    console.log("escuchando en el puerto 3005...");
});

