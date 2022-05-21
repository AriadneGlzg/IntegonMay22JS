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



let db,dbangular,alumnos,autores,registros,aloha,vuelos;
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
    dbangular=client.db("angulardb");
    console.log("Conectado a la DB♥");
    alumnos = db.collection("alumnos");
    autores = db.collection("Autores");
    registros = db.collection("Registro");
    aloha = dbangular.collection("personas");
    vuelos = dbangular.collection("vuelos");
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

app.get("/personas", (request,response) =>{
    console.log("♥ Se ejecuto la ruta personas...");
    //aloha es la variable asociada a la tabla de "personas" en la base de datos "angulardb"
                //toArray ocupa dos variables para guardar cosas, err es para guardar un mensale de error, e items para cuargar el arraycomotal.
    aloha.find().toArray((err,items) => { //aqui en items va a guardar todo lo del find() que viene de aloha que en realidad es la variable para la coleccion de personas
        if(err){
            console.log(err);
            response.status(500).json({err:err});
            return;
        }
        //si no hay algun error
        response.status(200).json({osa:items}); //eso   el json hace un paquete de informacion en formato json, osa es el nombre del paquete, items es lo que va a guardar
        //por lo tanto osa puede ser lo que sea, por buena practica se recomiendo que se llame como la tabla de la db que estas extrayendo    
    });    
});

app.get("/vuelos", (request,response) =>{
    console.log("♥ Se ejecuto la ruta vuelos para angulardb...");               
    vuelos.find().toArray((err,items) => { 
        if(err){
            console.log(err);
            response.status(500).json({err:err});
            return;
        }
        //si no hay algun error
        response.status(200).json(items); //aqui si no quieres que el paquete tenga nombre, solo se pone el items
        //tambien aqui lo estoy poniendo asi por el ejemplo en angular para que jale solo con data
        //({items}) si lo pones asi con las llaves va a tener nombre el nombre seria el nombre de la variable osea "items"            
    });
});

app.post("/vuelos", (request,response) =>{
    vuelos.insertOne(
        {
            NumeroVuelo: request.body.NumeroVuelo, //aqui lo que esta a la izquierda  puede ser cualquier cosa, es el nombre con que se guarda en la db por ejemplo
            Origen: request.body.Origen, // si le pongo amarillo se va a llamar amarillo en la db
            Destino: request.body.Destino,
            Fecha: request.body.Fecha,
            Horario: request.body.Horario, //request.body.COSA es el nombre que viene del json, pero nosotros estamos diciendole que se va a llamar de alguna forma
        },  // si le pongo request.body.Morado va a esperar que del json que viene del usurio se llame Morado, si el nombre no coincide, no va a entender que paso y va a guardar un nullo
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



