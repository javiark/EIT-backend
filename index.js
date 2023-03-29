const app = require('./app');

const port = 4000;

const dbURL = `mongodb+srv://javier778:javiark778@javiark.qbwamon.mongodb.net/eit-61543?retryWrites=true&w=majority`;
const mongoose = require('mongoose');

mongoose.connect(dbURL)
            .then(() => {
                console.log(`\x1b[35m Conexión a la DB satisfactoria \x1b[37m`);

                // Poner en marcha mi servidor express
                app.listen(port, () => {
                    console.log(`\x1b[36m Servidor funcionando en puerto ${port} \x1b[37m`);
                })
            })
            .catch((error) => {
                console.log(error)
})  
        

//hola

                        



                    

                    // console.log(`Linea ejecutada`);

                    // setTimeout(()=>{
                    //     console.log("timeout")
                    // },2000)



// console.log(`Linea ejecutada`)



// // // GET para traer productos
// // // POST para mandar datos
// // //PUT o PATCH una modifica toda y otra otra parte. Modifica datos de un producto
// // //DELETE puedo borrar un producto

// app.listen(port, ()=>{
//     console.log(`Servidor funcionando en puerto ${port}`)
// })
