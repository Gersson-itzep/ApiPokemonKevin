var Filtro = require('./Filtros_Poke');

exports.PaginaInicial = function (req, res) {

    const TiposPokemon = Filtro.Obtener_Tipos();
    res.render('Inicio.html', {
        List_TiposPokemon: TiposPokemon
    }); // render me sirve para enviar el areflo a html y poder recorrerlo
}

