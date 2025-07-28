// Titulo de las tareas
const titulo = document.querySelector(".upper-text__title");

// Lista de tareas
const listaTareas = document.querySelector(".container__list");


// Boton de añadir tarea
const añadirTareaBtn = document.querySelector(".upper-text__add");


// Funcion para tachar una tarea al ser completada
function strike(casilla, texto){

    casilla.addEventListener("click", ( event ) => {
    if (casilla.checked){
        texto.style.textDecoration = "line-through"
    }

    else {
        texto.style.textDecoration = "none"
    }
    })

}


// Funcion para crear una tarea

const crearTarea = () =>{
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

// Funcion para eliminar una tarea con el boton

const eliminarTarea = (tarea,boton) => {
    boton.addEventListener("click", ( event ) => {
        tarea.remove()
    })
}

// Funcion para abrir menu


añadirTareaBtn.addEventListener("click", (event) => {

    tareaLi = crearTarea();
    // Identificando hijos
    tareaInput = tareaLi.childNodes[0];
    tareaNombre = tareaLi.childNodes[1];
    tareaTrash = tareaLi.childNodes[2];
    tareaMenu = tareaLi.childNodes[3];

    eliminarTarea(tareaLi,tareaTrash);




})

// Añadir line-through al texto de las casillas que vienen por defecto

const listaItem = document.querySelectorAll(".container__list__item")


listaItem.forEach(item =>{
    let hijos = item.children;
    let checkbox = hijos[0];
    let texto = hijos[1];
    let trash = hijos[2];

    strike(checkbox,texto);

    eliminarTarea(item,trash);
})


// Borrar tareas
