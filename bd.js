let cursos = [
    {
        id: 1,
        nombre: 'Matematicas',
        duracion: '20 horas',
        valor: '20.000'
    },
    {
        id: 2,
        nombre: 'Ingles',
        duracion: '50 horas',
        valor: '50.000'
    },
    {

        id: 3,
        nombre: 'Programacion',
        duracion: '80 horas',
        valor: '60.000'
}];


const opciones = {
    idCurso: {
        demand: true,
        alias: 'i'
    },
    nombre: {
        demand: true,
        alias: 'n'
    },
    cedula: {
        demand: true,
        alias: 'c'
    }
}
module.exports = {
    cursos,
    opciones
};
