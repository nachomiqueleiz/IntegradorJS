//=====STORE=====

import { setproductoActivo } from "../../main"
import { handleGetProdLocalStorage } from "../persistence/localstorage"
import { openModal } from "../views/modal"

export const handleGetProdToStore = () => {
    const productos = handleGetProdLocalStorage()
    handleRenderList(productos)

}

export const handleRenderList = (Pin) => {
    const burgers = Pin.filter((el => el.categoria == "Hamburguesas"))
    const papas = Pin.filter((el => el.categoria == "Papas"))
    const gaseosas = Pin.filter((el => el.categoria == "Gaseosas"))

    const renderProductGroup = (productos, title) => {
        if(
            productos.length>0
        ){
            const productosHTML = productos.map((producto, index)=> {
                return `<div class='containerTargetItem' id='product-${producto.categoria}-${index}'>
                <div>
                <img class='imagenContainer' src='${producto.imagen}'/>
                <div>
                <h2>${producto.nombre}</h2>
                </div>
                <div class='targetProps'>
                <p><b>Precio:</b> $ ${producto.precio}</p>
                </div>
                </div>
                </div>
                
                `  
            })
            return `
            <section class='sectionStore'>
            <h3>${title}</h3>
            <div class='containerProdStore'>
            ${productosHTML.join("")}
            </div>
            
            </section>
            
            `
        } else{
            return ""
        }
    }

    const appContainer = document.getElementById("cointainerStore")
    appContainer.innerHTML = `
    ${renderProductGroup(burgers, "Hamburguesas")}
    ${renderProductGroup(papas, "Papas")}
    ${renderProductGroup(gaseosas, "Gaseosas")}
    `
    const addEvents = (Pin)=>{
        if(Pin){
        Pin.forEach((element,index) => {
            const productoContainer = document.getElementById(`product-${element.categoria}-${index}`)
                productoContainer.addEventListener('click', ()=>{
                    setproductoActivo(element);
                    openModal()
                })
            }); 
        }
    }
    addEvents(burgers)
    addEvents(papas)
    addEvents(gaseosas)
}