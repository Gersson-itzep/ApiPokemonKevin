var buscar = require('./Filtros_Poke');

exports.Buscar_exp = function (req, res) {
    const min = req.body.min_base;
    const max = req.body.max_base;
    const data = buscar.Por_Experiencia(min, max);
    res.render('ExperienciaPokemons.html', {
        Lista_Experiencia: data
    });
}