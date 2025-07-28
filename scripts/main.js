import { datos, anadirTarea, obtenerTareas } from "./categoria-datos.js";
import { strike, crearTarea, eliminarTarea, cargarCategoria, cambiarTitulo } from "./ui.js";


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

// Categoria actual

let categoriaActual = "Day";


añadirTareaBtn.addEventListener("click", (event) => {


    const tareaLi = crearTarea(listaTareas);
    // Identificando hijos
    const tareaInput = tareaLi.childNodes[0];
    const tareaNombre = tareaLi.childNodes[1];
    const tareaTrash = tareaLi.childNodes[2];
    const tareaMenu = tareaLi.childNodes[3];

    eliminarTarea(tareaLi,tareaTrash);
    strike(tareaInput,tareaNombre);

})



categoriasLista.addEventListener("click", (event) => {

    if (event.target.matches(".aside__list__item__button")){
        const categoria = event.target.dataset.category;
        cambiarTitulo(categoria,titulo);
        cargarCategoria(listaTareas, obtenerTareas(categoria))
    }
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

