const express = require("express");
const routes = require("./routes");
const path = require("path");

// Crear una app de expres
const app = express();

// Donde cargar los archivos estaticos
app.use(express.static('public'));

// Habilitar pug
app.set('view engine', 'pug');

// Añadir la carpeta de las vistas
app.set('views', path.join(__dirname, './views'));

// ruta pata el home
app.use('/', routes);

app.listen(3000);
