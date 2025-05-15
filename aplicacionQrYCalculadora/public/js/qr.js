let btn = document.getElementById("boton");
let numero = document.getElementById("numero");
let mensaje = document.getElementById("mensaje");
let divqr = document.getElementById("div-qr");
document.getElementById("formulario").addEventListener("submit",(event)=>{
    event.preventDefault(); // Evita que se envíe el formulario
    let msg = encodeURIComponent(mensaje.value);//Para codificar los espacios del mensaje para el link
    console.log(msg);
    let linkWpp =`https://api.whatsapp.com/send?phone=${numero.value}&text=${msg}`; //Link de WhatsApp
    console.log(encodeURIComponent(linkWpp))
    let linkQr="https://api.qrserver.com/v1/create-qr-code/?size=250x250&data="+encodeURIComponent(linkWpp);
    divqr.innerHTML=`<img src="${linkQr}">`;
});
 


