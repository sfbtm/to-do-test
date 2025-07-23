// Titulo de las tareas
const titulo = document.querySelector(".upper-text__title");

// Lista de tareas
const listaTareas = document.querySelector(".container__list");

// Boton de añadir tarea
const añadirTareaBtn = document.querySelector(".upper-text__add");

function strike(casilla, texto){

    if (casilla.checked){
        texto.style.textDecoration = "line-through"
    }

    else {
        texto.style.textDecoration = "none"
    }
}


añadirTareaBtn.addEventListener("click", (event) => {

    // Solicitar nombre de la tarea (input) y configurarlo
    const tareaNombre = document.createElement("input");
    tareaNombre.classList.add("container__list__item__text-input");
    tareaNombre.value = "Nueva tarea";

    // Crear nodo de item de lista y de input (checkbox)
    const tareaLi = document.createElement("li");
    const tareaInput = document.createElement("input");

    // Configurar input checkbox
    tareaInput.type = "checkbox";

    // Añadir clases a nodos
    tareaLi.classList.add("container__list__item");
    tareaInput.classList.add("container__list__item__input");

    // Parentar nodos
    tareaLi.appendChild(tareaInput);
    tareaLi.appendChild(tareaNombre);
    listaTareas.appendChild(tareaLi);

    // Provocar focus en el input del texto
    tareaNombre.focus()

    // Darle evento de checked al checkbox para que el texto tenga strike-throught

    tareaInput.addEventListener("click", (event) =>{
        strike(tareaInput,tareaNombre);
    });

})

// Añadir line-through al texto de las casillas que vienen por defecto

const listaItem = document.querySelectorAll(".container__list__item")

function encontrarHijos(lista){
    listaItem.forEach(item => {
        let hijos = item.children;
        let checkbox = hijos[0];
        let texto = hijos[1];

        console.log(hijos)

    })
}

listaItem.forEach(item =>{
    let hijos = item.children;
    let checkbox = hijos[0];
    let texto = hijos[1];

    checkbox.addEventListener("click",(event) => {
        strike(checkbox,texto)
    })
})

console.log(encontrarHijos(listaItem))

//  casillasDefecto.forEach(casilla => {
//      casilla.addEventListener("click", (event) => {
//          strike(casilla);
//      })})

