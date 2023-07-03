const {Router} = require("express")  // para config de rotes, traemos Router de express
const usersRouter = require("./usersRouter")
const postRouter = require("./postRouter")

const mainRouter = Router()  // lo instanciamos/creamos y le damos el nombre y lo modificamos en las rutas creadas originalmente con app.

mainRouter.use("/users", usersRouter)
mainRouter.use("/post", postRouter)

module.exports = mainRouter // exportamos las rutas a app.js