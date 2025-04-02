let inventario=[];
let container = document.getElementById("menu-container");
let createMenu=()=>{
    let content=`<h2>Menu</h2>`+
    `<div id="btns-menu">`+
    `<button class="btns-menu" onclick="agregarProducto()">Agregar producto</button>`+
    `<button class="btns-menu" onclick="mostrarProductos()">Mostrar producto</button>`+
    `<button class="btns-menu onclick="buscarProducto()">Buscar producto por nombre</button>`+
    `</div>`;
    container.innerHTML=content;    
}
let agregarProducto=()=>{
    console.log("Llamado Funcion 'agregarProducto()'");
    container.innerHTML=`<h2 onclick="createMenu()" class="regresar">Regresar</h2>
    <h3>Nuevo producto</h2>
    <div class=funciones>
        <input type="text"  placeholder="Ingresar Nombre">  
        <input type="number"  placeholder="Ingrese Cantidad">
        <input type="number"  placeholder="Ingresar precio C/U">
        <button>Agregar</button>
    </div>`;

}
let mostrarProductos=()=>{
    console.log("Llamado Funcion 'mostrarProductos()'");
}
let buscarProducto=()=>{
    console.log("Llamado Funcion 'buscarProducto()'");
}





createMenu();

