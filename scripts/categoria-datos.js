// En este archivo van los datos de cada categoria

// Diccionario con los datos de cada categoria
export const datos = {
    Day: [
        {nombre: "Trabajo 1", hecho: true},
        {nombre: "Trabajo 2", hecho: true},
    ],
}


// Funcion para obtener las tareas de cada categoria
export const obtenerTareas = categoria => {
    return datos[categoria];
}

export const anadirTarea = (categoria, tarea, status) => {

    const tareaObjeto = {
        nombre: tarea,
        hecho: status
    };

    datos[categoria].push(tareaObjeto);


}

// Funcion para modificar una tarea. Parametros:
// Categoria actual, cambio (Nombre o checkbox), nombre de la tarea, valor del elemento cambiado (Nombre o chekcbox)

export const modificarTarea = (categoria, cambio, indice, valorNuevo) => {
    const lista = obtenerTareas(categoria);
    const tarea = lista[indice];

    tarea[cambio] = valorNuevo;
    console.log(datos[categoria])
}

export const eliminarTarea = (categoria, indice) => {
    console.log(`Eliminando ${indice} de ${categoria}`)
    datos[categoria].splice(indice,1);
}

export const crearCategoria = (categoria) => {
    datos[categoria] = []
}