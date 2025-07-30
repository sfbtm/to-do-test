import { datos, anadirTarea, obtenerTareas, modificarTarea, eliminarTarea } from "./categoria-datos.js";
import { strike, crearTarea, cargarCategoria, cambiarTitulo } from "./ui.js";


// Titulo de las tareas
const titulo = document.querySelector(".upper-text__title");

// Lista de categorias
const categoriasLista = document.querySelector(".aside__list");

// Lista de tareas
const listaTareas = document.querySelector(".container__list");

// Boton de añadir tarea
const añadirTareaBtn = document.querySelector(".upper-text__add");

// Boton de añadir categoria
const añadirCategoriaBtn = document.querySelector(".aside__button");

// Categoria por defecto: DAY
let categoriaActual = "Day";
cambiarTitulo(categoriaActual, titulo)
cargarCategoria(listaTareas, obtenerTareas(categoriaActual));

// Añadir una tarea

añadirTareaBtn.addEventListener("click", (event) => {
    // Obtener las tareas para pasarlas como array
    const tareas = obtenerTareas(categoriaActual)

    anadirTarea(categoriaActual, "Nueva tarea", false);
    cargarCategoria(listaTareas, tareas);

})

// Evento para modificar el nombre de una tarea

listaTareas.addEventListener("focusout", (event) => {
    const indice = parseInt(event.target.closest("li").dataset.index, 10);

    if (event.target.matches(".container__list__item__text-input")){
        const nombreNuevo = event.target.value;
        modificarTarea(categoriaActual,"nombre",indice,nombreNuevo)
    }

})

// Evento para botones de una tarea

listaTareas.addEventListener("click", (event) =>{

    // Indice de la tarea en cuestion
    const indice = parseInt(event.target.closest("li").dataset.index, 10);

    const boton = event.target;
    // Para el checkbox
    if (event.target.matches(".container__list__item__input")) {

        modificarTarea(categoriaActual,"hecho",indice,boton.checked)
        cargarCategoria(listaTareas, obtenerTareas(categoriaActual))

    }

    // Para eliminar una tarea
    if (event.target.matches(".container__list__item__trash")){
        eliminarTarea(categoriaActual, indice)
        boton.closest("li").remove()
    }
})

// Cargar la categoria al hacer click en alguna categoria de la lista

categoriasLista.addEventListener("click", (event) => {

    if (event.target.matches(".aside__list__item__button")){
        const categoria = event.target.dataset.category;

        categoriaActual = categoria;

        cambiarTitulo(categoria,titulo);
        cargarCategoria(listaTareas, obtenerTareas(categoria))

    }
})



// Añadir line-through al texto de las casillas que vienen por defecto

// const listaItem = document.querySelectorAll(".container__list__item")


// listaItem.forEach(item =>{

//     let hijos = item.children;
//     let checkbox = hijos[0];
//     let texto = hijos[1];
//     let trash = hijos[2];

//     strike(checkbox,texto);

// })

// checkbox con strike re-escrito