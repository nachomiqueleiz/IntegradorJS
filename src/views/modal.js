import { productoActivo, setproductoActivo } from "../../main"
import { handleDeleteProd } from "../services/products"


/* ====POPUP==== */

const cancelButton = document.getElementById("cancelButton")
cancelButton.addEventListener('click', ()=>{
  handleCancelButton()
})

const handleCancelButton = () => {
    closeModal()
}

//Funciones abrir cerrar modal
export const openModal = () => {
   const modal = document.getElementById("modalPopUP")
   modal.style.display = "flex"
   const buttonDelete = document.getElementById("deleteButton")
  if(productoActivo){
   buttonDelete.style.display = "block";
   } else{
      buttonDelete.style.display = "none";
   }

  
   if(productoActivo){
    const nombre = document.getElementById("name"),
    imagen = document.getElementById("img"),
    precio = document.getElementById("precio"),
    categoria = document.getElementById("categoria");
    nombre.value = productoActivo.nombre;
    imagen.value = productoActivo.imagen;
    precio.value = productoActivo.precio;
    categoria.value = productoActivo.categoria;
   }
}

export const closeModal = () => {
    const modal = document.getElementById("modalPopUP")
    modal.style.display = "none";
    setproductoActivo(null);
    resetModal();
 }

 const resetModal = ()=>{
    const nombre = document.getElementById("name"),
    imagen = document.getElementById("img"),
    precio = document.getElementById("precio"),
    categoria = document.getElementById("categoria");
    nombre.value = "";
    imagen.value = "";
    precio.value = null;
    categoria.value = "Seleccione una categoria"
 }
 const deleteButton = document.getElementById("deleteButton")
 deleteButton.addEventListener('click', ()=>{
   handleDeleteButton()
 })

 const handleDeleteButton = () =>{
   handleDeleteProd();
 }