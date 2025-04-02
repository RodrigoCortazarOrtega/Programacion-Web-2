let inventario=[];
let container = document.getElementById("menu-container");
let createMenu=()=>{
    let content=`<h2>Menu</h2>`+
    `<div id="btns-menu">`+
    `<button class="btns-menu" onclick="agregarProducto()">Agregar producto</button>`+
    `<button class="btns-menu" onclick="mostrarProductos()">Mostrar producto</button>`+
    `<button class="btns-menu">Buscar producto por nombre</button>`+
    `</div>`;
    container.innerHTML=content;    
}
let agregarProducto=()=>{
    console.log("Llamado Funcion 'agregarProducto()'");
}
let mostrarProductos=()=>{
    console.log("Llamado Funcion 'mostrarProductos()'");
}
let buscarProducto=()=>{
    console.log("Llamado Funcion 'buscarProducto()'");
}





createMenu();

