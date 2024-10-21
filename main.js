import { renderCategories } from "./src/services/categories";
import { handleSearchProdByName } from "./src/services/searchBar";
import { openModal } from "./src/views/modal";
import { handleGetProdToStore } from "./src/views/store";
import "./style.css"

//====Aplicacion====
export let categoriaActiva = null;

export const setCategoriaActiva = (cat)=>{
    categoriaActiva=cat;
}

export let productoActivo = null;

export const setproductoActivo = (Pin)=>{
    productoActivo=Pin;
}


handleGetProdToStore();
renderCategories();

const buttonAgregar = document.getElementById("buttonAgregar")

buttonAgregar.addEventListener('click', ()=> {
    openModal()
})


//Boton Buscar

const buttonBuscar = document.getElementById("buttonBuscar");
buttonBuscar.addEventListener('click', ()=>{
    handleSearchProdByName()
})