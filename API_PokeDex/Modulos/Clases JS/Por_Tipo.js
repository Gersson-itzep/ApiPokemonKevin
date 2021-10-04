var Filtro = require('./Filtros_Poke');


exports.Buscar_tipo = function (req, res) {
    const tipo_pokemon = req.body.t_pokemon;
    const pokemonInfos = Filtro.Por_Tipos(tipo_pokemon);
    res.render('TiposPokemon.html', {
        tipo: tipo_pokemon,
        arreglo: pokemonInfos
    });
}