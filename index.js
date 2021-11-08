const express = require('express');
const mongoose = require('mongoose');
const schemaPersona = require('./modelos/persona.js');

const app = express();
const router = express.Router();
app.use(express.urlencoded({extended:true}));
app.use(express.json());

mongoose.connect('mongodb+srv://William:Vargas2021*@cluster01.4fvpi.mongodb.net/BDGrupo26');

// respond with "hello world" when a GET request is made to the homepage
app.get(
    '/Ruta', // Ruta
    function(request, response) {  //
    response.send('hello world <h1>Hola</h1>');
  });



  app.post('/persona',
  (request, response) => {
      const data =request.body;
    let personanueva = new schemaPersona ({
        id: data.id,
        apellidos: data.apellidos,
        edad: data.edad,
        nombre: data.nombre,
    });

    personanueva.save(
        function (error, datos){
            
        }

    );
  }
  )


  const port = 3000;
  app.use(router);

  app.listen(
      port,
       () => {
           console.log("El servidor esta escuchando por el puerto: "+port);
       } 
    );