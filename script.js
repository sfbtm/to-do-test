// Lista de tareas
const listaTareas = document.querySelector(".container__list")

// Boton de añadir tarea
const añadirTareaBtn = document.querySelector(".upper-text__add")

añadirTareaBtn.addEventListener("click", (event) => {
    // Solicitar nombre de la tarea
    const tareaNombre = prompt("Ingrese el nombre de la tarea: ")

    // Crear nodo de lista, de input y de texto
    const tareaLi = document.createElement("li")
    const tareaInput = document.createElement("input")
    const tareaTexto = document.createTextNode(`${tareaNombre}`)

    // Configurar input
    tareaInput.type = "checkbox"

    // Configurar nodos
    tareaLi.classList.add("container__list__item");
    tareaInput.classList.add("container__list__item__input");

    // Parentar nodos
    tareaLi.appendChild(tareaInput);
    tareaLi.appendChild(tareaTexto);
    listaTareas.appendChild(tareaLi);
})