import { categoriaActiva } from "../../main";
import { handleGetProdLocalStorage } from "../persistence/localstorage";
import { handleRenderList } from "../views/store";

//====CATEGORIA====
const handleFilterProductsByCategory = (cat)=>{
    const products = handleGetProdLocalStorage();
    switch(cat){
        case categoriaActiva:
            handleRenderList(products)
            break;
        case "Todo":
            handleRenderList(products)
            break;
        case "Hamburguesas":
        case "Papas":
        case "Gaseosas":
            const result = products.filter((el)=> el.categoria == cat)
            handleRenderList(result)
         default:
            break;
        case "mayorPrecio":
            const result2 = products.sort((a,b)=> b.precio - a.precio)
            handleRenderList(result2)
            break;
        case "menorPrecio":
            const result3 = products.sort((a,b)=> a.precio - b.precio)
            handleRenderList(result3)
            break;
    }
}




//render de la vista categoria

export const renderCategories = () => {

    const ulList = document.getElementById("listFilter");
    ulList.innerHTML = `
    <li id="Todo"> Todos los productos</li>
    <li id="Hamburguesas"> Hamburguesas</li>
    <li id="Papas"> Papas</li>
    <li id="Gaseosas">Gaseosas</li>
    <li id="mayorPrecio"> Mayor precio</li>
    <li id="menorPrecio"> Menor precio</li>
    `;
    const liElements = ulList.querySelectorAll("li")
    liElements.forEach((e)=>{
        e.addEventListener('click', ()=>{
            handleClick(e);
        })

    })

    const handleClick = (e)=>{
        handleFilterProductsByCategory(e.id);
        liElements.forEach((el)=>{
            if(el.classList.contains('liActive')){
                el.classList.remove('liActive');
            } else {
                if(e === el){
                    el.classList.add('liActive');
                }
            }
        })
    }
};