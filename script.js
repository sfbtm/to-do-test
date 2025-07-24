// Titulo de las tareas
const titulo = document.querySelector(".upper-text__title");

// Lista de tareas
const listaTareas = document.querySelector(".container__list");


// Boton de añadir tarea
const añadirTareaBtn = document.querySelector(".upper-text__add");


// Funcion para tachar una tarea al ser completada
function strike(casilla, texto){

    if (casilla.checked){
        texto.style.textDecoration = "line-through"
    }

    else {
        texto.style.textDecoration = "none"
    }
}


// Funcion para borrar una tarea con el boton de basura



añadirTareaBtn.addEventListener("click", (event) => {

    // Solicitar nombre de la tarea (input) y configurarlo
    const tareaNombre = document.createElement("input");
    tareaNombre.classList.add("container__list__item__text-input");
    tareaNombre.value = "Nueva tarea";

    // Crear nodo de item de lista, de input (checkbox) y de trash
    const tareaLi = document.createElement("li");
    const tareaInput = document.createElement("input");
    const tareaTrash = document.createElement("button");


    // Configurar input checkbox
    tareaInput.type = "checkbox";

    // Añadir clases a nodos
    tareaLi.classList.add("container__list__item");
    tareaInput.classList.add("container__list__item__input");
    tareaTrash .classList.add("container__list__item__trash");

    // Parentar nodos
    tareaLi.appendChild(tareaInput);
    tareaLi.appendChild(tareaNombre);
    tareaLi.appendChild(tareaTrash);
    listaTareas.appendChild(tareaLi);


    // Provocar focus en el input del texto
    tareaNombre.focus()

    // Darle evento de checked al checkbox para que el texto tenga strike-throught
    tareaInput.addEventListener("click", (event) =>{
        strike(tareaInput,tareaNombre);

    // Darle evento al boton de borrar tareas

    });

        tareaTrash.addEventListener("click",(event) => {
        tareaLi.remove()
    })

})

// Añadir line-through al texto de las casillas que vienen por defecto

const listaItem = document.querySelectorAll(".container__list__item")


listaItem.forEach(item =>{
    let hijos = item.children;
    let checkbox = hijos[0];
    let texto = hijos[1];
    let trash = hijos[2];

    checkbox.addEventListener("click",(event) => {
        strike(checkbox,texto)
    })

    trash.addEventListener("click", (event) => {
        item.remove()
    })

})


// Borrar tareas
