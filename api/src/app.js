const express = require("express") // traemos a express
const morgan = require("morgan")   // traemos a morgan
const cors = require('cors');

const mainRouter = require("./routes/mainRouter") // importamos las rutas de mainrouter

const app = express()  // invocamos, creamos una instancia de express, llamandola app

app.use(cors())

app.use(morgan("dev")) //middleware que invocamos con el use de express, en este caso morgan

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*'); // update to match the domain you will make the request from
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header(
        'Access-Control-Allow-Headers', 
        'Origin, X-Requested-With, Content-Type, Accept'
        );
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
  });


app.use(express.json())

app.use(mainRouter)  // usamos las rutas que modularizamos en mainRouter, que estan importadas arriba


module.exports = app   // exportamos lo que creamos al resto de la aplic.