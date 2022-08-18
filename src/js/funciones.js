
function inicio(){
    
    let mensajeNormal = document.getElementById("text").value;
    
}

inicio();



function btnEncriptar(){

    let mensajeNormal = document.getElementById("text").value.toLowerCase();
    console.log(mensajeNormal);
    if (mensajeNormal.trim() === "") {
        console.log("necesita un mensaje");
        return;
    }
    let mensajeEncriptado = encriptar(mensajeNormal);
    let cajaEncriptado = document.getElementById("textEncriptado");
    cajaEncriptado.innerText = mensajeEncriptado;

}

function encriptar(mensaje){
    let arregloDeLetras = mensaje.split('');
    for (let i = 0; i < arregloDeLetras.length; i++) {
        const element = arregloDeLetras[i];
        if (esVocal(element)) {
            arregloDeLetras[i]= reemplazarVocal(element);
        }
        console.log(arregloDeLetras)
    }
    return arregloDeLetras.join().replaceAll(",", "");
}

function esVocal(letra){
    return (letra === 'a' || letra === 'e' || 
            letra === 'i' || letra === 'o' || letra === 'u');
}

function reemplazarVocal(vocal){
    if (vocal === 'a') {
        return 'ai';
    }
    if (vocal === 'e') {
        return 'enter';
    }
    if (vocal === 'i') {
        return 'imes';
    }
    if (vocal === 'o') {
        return 'ober';
    }
    return 'ufat';
}

//Proceso inverso

function btnDesencriptar(){

    let textEncriptado = document.getElementById("text").value.toLowerCase();
    console.log(textEncriptado);
    if (textEncriptado.trim() === "") {
        console.log("necesita un mensaje");
        return;
    }
    let mensajeDesencriptado = desencriptar(textEncriptado);
    let cajaDesencriptado = document.getElementById("textEncriptado");
    cajaDesencriptado.innerText = mensajeDesencriptado;

}

function desencriptar(mensaje){
    mensaje = mensaje.replaceAll("ai", "a");
    mensaje = mensaje.replaceAll("enter", "e");
    mensaje = mensaje.replaceAll("imes", "i");
    mensaje = mensaje.replaceAll("ober", "o");
    mensaje = mensaje.replaceAll("ufat", "u");
    console.log(mensaje);
    return mensaje;
}


