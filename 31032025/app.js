let inventario = [];

function mostrarMenu(){
    return parseInt(prompt(
        `Opciones Disponibles\n
        1. Agregar producto\n
        2. Mostrar productos\n
        3. Buscar producto por nombre\n
        4. Salir\n
        Elija Opcion
        `
    ));
}


function agregarProducto(){
    let nombre=prompt("Introduce el nombre del producto");
    let cantidad=prompt("Introduce la cantidad del producto");
    let precio = parseInt(prompt("Introduce el precio del producto"))
    
    
    if(cantidad>0 && precio>0){
        let producto={
            nombre:nombre,
            cantidad:cantidad,
            precio:precio,
        }
        inventario.push(producto);
        alert("Producto agregado");
    }else{
        alert("La cantidad y precios deben ser numeros positivos")
    }
}

function buscarProducto(){
    let nombreB=prompt("Ingresa nombre del producto a buscar");
    let existe=false;
    let referencia;
    for(let i=0; i<inventario.length;i++){
        if(inventario[i].nombre===nombreB){
            existe=true;referencia=inventario[i];
        }
        if(existe===true) break;
    } 
    existe?alert(`Elemento Encontrado!
                Nombre: ${referencia.nombre}
                Cantidad: ${referencia.cantidad}
                Precio: ${referencia.precio}`):
    alert("El elemento buscado no existe!");
}



function mostrarProductos(){
    if(inventario.length==0){
        alert("No hay productos en el inventario")
    }else{
        let mensaje="Productos:\n";
        for(let i=0 ; i<inventario.length;i++){
            mensaje+=`****Producto ${i+1}: \n`+
            `________Nombre: ${inventario[i].nombre}\n`+
            `________Precio: ${inventario[i].precio}\n`+
            `________Cantidad: ${inventario[i].cantidad}\n`;
        }
        alert(mensaje);
    }
}

function iniciarPrograma(){
    let continuar=true;
    while(continuar){
        let opc=mostrarMenu();
        switch(opc){
            case 1:
                agregarProducto();
                break;
            case 2:
                mostrarProductos();
                break;
            case 3:
                buscarProducto();
                break;
            case 4:
                alert("Saliendo del programa...");
                continuar=false;
                break;
            default:
                alert("Opcion no valida!");
                break;
        }
    }
    alert("Programa Finalizado");
}

iniciarPrograma();



//De tarea funcion generar producto