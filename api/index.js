const server = require("./src/app") // traemos lo de app, el server
const {conn} = require("./src/db")

const PORT = 3001  // puerto en donde vamos a escuchar el server

server.listen(PORT, ()=>{         // por medio de la funcion que nos da express llamada listen, con el callback mostramos cartel
    conn.sync({force: false}) // cada vez que levantan el servidor, se resetea la base de datos, ponerla en false si queremos que quede algo
    console.log(`Listening on port${PORT}`)   // asi sabemos que esta todo bien
})