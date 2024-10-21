//Barra de busqueda

import { handleGetProdLocalStorage } from "../persistence/localstorage"
import { handleRenderList } from "../views/store"

export const handleSearchProdByName = () =>{
    const inputHeader = document.getElementById("inputHeader")
    const productos = handleGetProdLocalStorage()
    const result = productos.filter((e)=> e.nombre.toLowerCase().includes(inputHeader.value))
    handleRenderList(result);
}