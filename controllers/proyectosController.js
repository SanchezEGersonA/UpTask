exports.inicio = (req, res) => {
    res.render('index', {
        nombrePagina: "Proyectos"
    });
}