const Product = require('./../schemas/product.schema')

const getAllProducts = (req, res) => {

    Product.find().then(function(productos){

        res.status(200).send({
            msg: `Productos obtenidos correctamente`,
            productos: productos
        });

    }).catch((error)=> {
        console.log(error)
    }) 
}


function addProduct(req, res){
    // console.log(`Body`)
    // console.log(req.body);
    const product = new Product(req.body);
    // console.log(product)
    product.save()
                .then(function(product){

                    // if(!product){
                    //     console.log("No espero")
                    //     return res.status(200).send(`Algo va a fallar`)
                    // }


                // console.log("Termino el guardado del producto")
                return res.status(200).send({
                    msg:`Producto guardado correctamente`,
                    product
                })

                }).catch(error=>{
                    console.log(error);
                    res.status(500).send(`El producto no se puede guardar`)
            })
    //         console.log("No espero")
    // res.status(200).send(`Algo va a fallar`)
    // console.log("Algo")

}