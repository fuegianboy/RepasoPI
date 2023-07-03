const {Router} = require("express")  // para config de rotes, traemos Router de express

const usersRouter = Router()  // lo instanciamos/creamos y le damos el nombre y lo modificamos en las rutas creadas originalmente con app.

const {getUsersHandler, getDetailHandler, createUserHandler} = require("../handlers/usersHandlers")


usersRouter.get("/", getUsersHandler)

usersRouter.get("/:id", getDetailHandler)

usersRouter.post("/", createUserHandler)

module.exports = usersRouter