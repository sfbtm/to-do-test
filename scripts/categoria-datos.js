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

export const anadirTarea = (categoria, tarea) => {
    datos[categoria].push(tarea);
}

export const eliminarTarea = (categoria, tarea) => {
    indice = datos[categoria].indexOf(tarea);
    data[categoria].splice(indice,1);
}

export const crearCategoria = (categoria) => {
    datos[categoria] = []
}