const express = require('express');
const router = express.Router();


var filtro_Nombre = require('../Clases JS/Por_Nombre');
var filtro_Tipo = require('../Clases JS/Por_Tipo.js');
var filtro_Experiencia = require('../Clases JS/Por_Experiencia')



var Inicio = require('../Clases JS/Inicio.js');
router.get('/', Inicio.PaginaInicial);




router.post('/type_pokemons', filtro_Tipo.Buscar_tipo);
router.post('/information_pokemon', filtro_Nombre.DatosPokemon);
router.post('/base_experience', filtro_Experiencia.Buscar_exp);
router.post('/errors', function (requ, res) {
    console.error(requ.body, res);
    res.sendStatus(200);
});

module.exports = router;