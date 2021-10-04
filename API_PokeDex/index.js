const express = require('express');
const body_parser = require('body-parser');
const path = require('path');
const app = express();



app.use(body_parser.urlencoded({
    extended: true
  }));


//configuraciones
let Raiz = path.join(__dirname, '/Modulos');

app.set('views', path.join(Raiz, 'Paginas'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');



//SE DEFINE LA RUTA PRINCIPAL DE LOS ENLACES O PAGINAS
app.use(require('./Modulos/Conexion/enlaces'));

//estatico
app.use(express.static(path.join(__dirname, 'Modulos')))


//inicializamos  el server est
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`App iniciado en ${PORT}`));