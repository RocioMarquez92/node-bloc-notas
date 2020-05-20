// configurar los siguientes comandos 
//--> const arg
//   comando crear'Crear un elemento por hacer'
// flag -- description -d
//   comando actualiza 'Actualiza el estrado completado de una tarea
// --description -d
// --completado -c --> valor por defecto a true
const descripcion = {

    demand: true,
    alias: 'd',
    Desc: 'Descripción de la tarea por hacer'
};
const completado = {
    default: true,
    alias: 'c',
    Desc: 'Marca como completado o pendiente la tarea'
};
const argv = require('yargs')
    .command('crear', 'Crear un elemento por hacer ', {
        descripcion
    })
    // .command('listar', 'Listar las tareas por hacer ', opts)
    .command('actualizar', 'Actualiza el estado completado de una tare', {
        descripcion,
        completado
    })
    .command('borrar', 'Borrar una tarea', opts)
    .help()
    .argv;

module.exports = {
    argv
}