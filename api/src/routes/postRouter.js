const {Router} = require("express")  // para config de rotes, traemos Router de express
const {createPostHandler} = require("../handlers/postHandler")
const postRouter = Router()  // lo instanciamos/creamos y le damos el nombre y lo modificamos en las rutas creadas originalmente con app.


postRouter.post("/", createPostHandler )

module.exports = postRouter