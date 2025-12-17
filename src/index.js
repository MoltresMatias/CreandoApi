const app = require('./app.js');


console.log('Iniciando servidor...');

app.listen(app.get('port'), () => {
    console.log("Servidor escuchando en el puerto", app.get("port"));
});