var Filtro = require('./Filtros_Poke');

exports.DatosPokemon = function (req, res) {
    const pokemon = req.body.nombre;
    const Buscar_Pokemon = Filtro.Por_Nombre(pokemon);
    if (!Buscar_Pokemon) {

        res.send(`el pokemon ${pokemon} no fue encontrado`);
    } else {
        res.render('Pokemons.html', {
            Nombre: Buscar_Pokemon.name,
            image: Buscar_Pokemon.image
        });

    }
}