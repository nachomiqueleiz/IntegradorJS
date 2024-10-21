//=====LOCALSTORAGE=====

export const handleGetProdLocalStorage = ()=>{
    const productos = JSON.parse(localStorage.getItem("productos"))
    if(productos){
        return productos
    } else {
        return[]
    }
}

//GUARDAR EN LOCALSTORAGE

export const setInLocalStorage = (productIn)=>{
    if(productIn) {

        let productsInLocal = handleGetProdLocalStorage();

        const existingIndex = productsInLocal.findIndex((productsLocal)=>
        productsLocal.id == productIn.id
        );

        if(existingIndex !== -1){
            productsInLocal[existingIndex] = productIn;
        }else{
            productsInLocal.push(productIn);
        }
        localStorage.setItem("productos", JSON.stringify(productsInLocal));
    }
};