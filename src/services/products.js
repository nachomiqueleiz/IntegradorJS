import { handleGetProdToStore, handleRenderList } from "../views/store";
import { handleGetProdLocalStorage, setInLocalStorage } from "../persistence/localstorage";
import { closeModal } from "../views/modal"
import { productoActivo } from "../../main";
import Swal from "sweetalert2";

/* ====Producto==== */


 const acceptButton = document.getElementById("acceptButton")
acceptButton.addEventListener('click', ()=>{
    handleSaveOrModifyProd()
})

export const handleSaveOrModifyProd = () => {
    const nombre = document.getElementById("name").value,
    imagen = document.getElementById("img").value,
    precio = document.getElementById("precio").value,
    categoria = document.getElementById("categoria").value;
    let object = null;
    
    if(productoActivo){
        object = {
            ... productoActivo,
            nombre,
            imagen,
            precio,
            categoria,
        }
    }else{
        object = {
        id: new Date().toISOString(),
        nombre,
        imagen,
        precio,
        categoria,
     }
    }
    Swal.fire({
        title: "Correcto!",
        text: "Producto guardado correctamente!",
        icon: "success"
      });
    setInLocalStorage(object);
    handleGetProdToStore();
    closeModal();
}

export const handleDeleteProd = () => {
    Swal.fire({
        title: "Estas seguro?",
        text: "No podrás revertir esto!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Si, eliminalo!",
        cancelButtonText: "Cancelar",
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title: "Eliminado!",
            text: "Producto eliminado con exito.",
            icon: "success"
          });
            const productos = handleGetProdLocalStorage();
            const result = productos.filter((e)=>e.id !== productoActivo.id)
            localStorage.setItem("productos", JSON.stringify(result))
            const newProductos = handleGetProdLocalStorage()
            handleRenderList(newProductos);
            closeModal();
        }else{
            closeModal();
        }
      });
    
}