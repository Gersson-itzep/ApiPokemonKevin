const PokedexDB = require("../../pokedex.json");

exports.Por_Nombre = function (nombre) {
    const data = PokedexDB.find((p) => p.name.toLowerCase() === nombre.toLowerCase());
    if (!data) {
        return null;
    }
    return data;
}

exports.Obtener_Tipos = function () {
    let ListaTipos = [];
    var contador = 0;

    PokedexDB.forEach(Pokemon => {
        for (let i = 0; i < Pokemon.types.length; i++) {

            ListaTipos[contador] = Pokemon.types[i];
            contador++;
        }
    });

    let Resultados = ListaTipos.filter((item, index) => {
        return ListaTipos.indexOf(item) === index;
    })
    return Resultados;
}


exports.Por_Tipos = function (tipo) {
    let data_tipos = PokedexDB.filter((item, index) => {
        for (let i = 0; i < item.types.length; i++) {

            return tipo === item.types[i];

        }

    })
    return data_tipos;
}

exports.Por_Experiencia = function (min, max) {
    let PokemonExperiencia = PokedexDB.filter((item, index) => {

        return parseInt(item.base_experience, 10) >= min && parseInt(item.base_experience, 10) <= max;

    })
    return PokemonExperiencia;
}