// Funcion para tachar una tarea al ser completada

export function strike(casilla, texto){

    if (casilla.checked){
        texto.style.textDecoration = "line-through"
    }

    else {
        texto.style.textDecoration = "none"
    }

}

// Funcion para crear una tarea

export const crearTarea = (listaTareas) =>{
    // Solicitar nombre de la tarea (input) y configurarlo
    const tareaNombre = document.createElement("input");
    tareaNombre.classList.add("container__list__item__text-input");
    tareaNombre.value = "Nueva tarea";

    // Crear nodo de item de lista, de input (checkbox) y de trash y menu
    const tareaLi = document.createElement("li");
    const tareaInput = document.createElement("input");
    const tareaTrash = document.createElement("button");
    const tareaMenu = document.createElement("button");


    // Configurar input checkbox
    tareaInput.type = "checkbox";

    // Añadir clases a nodos
    tareaLi.classList.add("container__list__item");
    tareaInput.classList.add("container__list__item__input");
    tareaTrash .classList.add("container__list__item__trash");
    tareaMenu .classList.add("container__list__item__menu");

    // Parentar nodos
    tareaLi.appendChild(tareaInput);
    tareaLi.appendChild(tareaNombre);
    tareaLi.appendChild(tareaTrash);
    tareaLi.appendChild(tareaMenu);
    listaTareas.appendChild(tareaLi);

    // Provocar focus en el input del texto
    tareaNombre.focus()

    return tareaLi
}


// Funcion para cambiar el titulo de la categoria al momento de cargarla
// Parametros: Categoria actual y el titulo de la lista de tareas

export const cambiarTitulo = ( categoria, titulo ) => {
    titulo.innerHTML = categoria;
}

export const cargarCategoria = ( contenedor, tareas ) => {
    // Vaciar el contenedor de tareas
    contenedor.innerHTML = "";

    // Añadir tareas al contenedor
    tareas.forEach((tarea, indice) => {
        const nodoTarea = crearTarea(contenedor);
        let tareaInput = nodoTarea.childNodes[0];
        let tareaNombre = nodoTarea.childNodes[1];
        tareaInput.checked = tarea["hecho"];
        tareaNombre.value = tarea["nombre"];
        // Dataset para interactuar en el DOM
        nodoTarea.dataset.index = indice;
        strike(tareaInput, tareaNombre);
    })

}