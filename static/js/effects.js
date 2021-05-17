//Que cuando toquemos el btn aparezca y desaparezca el menu
menubtn.addEventListener("click", () => {
    nav.classList.toggle("desplegar");
});
menuFilter.addEventListener("click", () => {
    filter.classList.toggle("mostrarFiltro");
    console.log("Hiciste");
});