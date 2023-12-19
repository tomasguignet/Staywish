const express = require("express");
const {Router} = require("express");
const morgan = require("morgan")
const routes = require("./routes/index.js");

require("./db.js");

const router = Router();
const app = express();

//le damos un nombre a nuestra app
app.name = "StaywishAPI";

//permitimos que express codifique respuestas en formato json
app.use(express.json());
//permitimos que express codifique respuestas en formato fromulario
app.use(express.urlencoded({extended: false}));
//aplicamos el middleware morgan para tener detalles de la peticion HTTP en consola
app.use(morgan("dev"));
//habilitamos el acceso CORS
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Credentials", "true");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
    next();
  });

  //enviamos la solicitud a la ruta correspondiente
app.use("/", routes);

//catch de errores
app.use((err, req, res, next) => {
    // eslint-disable-line no-unused-vars
    const status = err.status || 500;
    const message = err.message || err;
    console.error(err);
    res.status(status).send(message);
  });


module.exports = app;