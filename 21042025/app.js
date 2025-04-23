//App para generar un codigo qr
let generarQR = ()=>{
    let var1 = document.getElementById("input1").value.trim();
    let var2 = document.getElementById("input2").value.trim();
    let var3 = document.getElementById("input3").value.trim();
    let var4 = document.getElementById("input4").value.trim();
    var text1 = var1+","+var2+","+var3+",+"+var4;
    var qrcode = new QRCode(document.getElementById("qr-code"), {
        text: text1,
        width: 256,
        height: 256
      });
}


web.go("google.es");


//De tarea algo similar con el appi de whatssap. Foto del qr para abrir un numero de telefono con un mensaje en whatsapp 