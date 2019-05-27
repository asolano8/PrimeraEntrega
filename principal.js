const { cursos, opciones } = require('./bd');
const argv = require('yargs')
    .command('inscribir', 'Inscribirme en un curso', opciones)
    .argv;

const fs = require('fs');


function listarCursos() {
    let i = 0;
    cursos.forEach(({ id, nombre, duracion, valor }) => {
        setTimeout(() =>
            console.log("El curso con ID: " + id +
                " se llama " + nombre +
                " tiene una duración de " + duracion + " horas" +
                " y un valor de: " + valor + " pesos."), 2000 * i)
        i++;
    });
};

const resultado = cursos.find(result => result.id === argv.idCurso);

if (resultado === undefined && argv.idCurso === undefined) {

    listarCursos();

} else if (resultado === undefined) {

    console.log('Ha ingresado un id que no corresponde a ningun curso seleccione una de las siguientes opciones: ');
    listarCursos();

} else {

    let leerArchivo = (opciones) => {
        let texto = 'El estudiante : ' + argv.nombre + '\n' +
            'con cedula : ' + argv.cedula + '\n' +
            'se ha matriculado en el curso : ' + resultado.nombre + '\n' +
            'con una duración : ' + resultado.duracion + '\n' +
            'y con un valor de  : ' + resultado.valor;
        fs.writeFile('matricula.txt', texto, (err) => {
            if (err) throw err;
            console.log('se ha creado el archivo');
        });
    }
    leerArchivo(opciones);

}





