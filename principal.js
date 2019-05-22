const { cursos, opciones } = require('./bd');
let { idCurso, nombre, cedula } = opciones;

const argv = require('yargs')
    .command('inscribir', 'Inscribirme en un curso', opciones)
    .argv;

const fs = require('fs');

let mostrarMatematicas = function () {
    setTimeout(function () {
        console.log("La materia : " + cursos[0].nombre + ' con id : ' + cursos[0].id + ' tiene una duración de : ' + cursos[0].duracion + ' y cuesta $:' + cursos[0].valor + ' pesos');
    }, 2000);
}

let mostrarIngles = function () {
    setTimeout(function () {
        console.log("La materia : " + cursos[1].nombre + ' con id : ' + cursos[1].id + ' tiene una duración de : ' + cursos[1].duracion + ' y cuesta $:' + cursos[1].valor + ' pesos');
    }, 4000);
}

let mostrarProgramacion = function () {
    setTimeout(function () {
        console.log("La materia : " + cursos[2].nombre + ' con id : ' + cursos[2].id + ' tiene una duración de : ' + cursos[2].duracion + ' y cuesta $:' + cursos[2].valor + ' pesos');
    }, 6000);
}



if (argv.idCurso == undefined) {

    mostrarMatematicas();
    mostrarIngles();
    mostrarProgramacion();

} else {

    const resultado = cursos.find(result => result.id === argv.idCurso);


    if (resultado === undefined) {

        console.log('Ha ingresado un id que no corresponde a ningun curso');
        mostrarMatematicas();
        mostrarIngles();
        mostrarProgramacion();

    } else {

        let leerArchivo = (opciones) => {
            let texto = 'El estudiante : ' + argv.nombre + '\n' +
                'con cedula : ' + argv.cedula + '\n' +
                'se ha matriculado en el curso : ' + resultado.nombre + '\n' +
                'con una duración : ' + resultado.duracion + '\n' +
                'y con un valor de  : ' + resultado.valor ;
                fs.writeFile('matricula.txt', texto, (err) => {
                    if (err) throw err;
                    console.log('se ha creado el archivo');
                });
        }
        leerArchivo(opciones);

    }

}







