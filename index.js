const { ok } = require("assert");
const express = require("express")
const app = express();
const port =4000;

app.get('/',(request, response)=>{
    response.send({
        msg:`Bienvenido a mi servidor express ${port}`,
        ok:true
    })
})

// GET para traer productos
// POST para mandar datos
//PUT o PATCH una modifica toda y otra otra parte. Modifica datos de un producto
//DELETE puedo borrar un producto

app.listen(port, ()=>{
    console.log(`Servidor funcionando en puerto ${port}`)
})

//hola