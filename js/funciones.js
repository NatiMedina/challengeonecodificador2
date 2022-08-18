const vocales = 'aeiou'

function btnEncriptar(){

    let mensajeNormal = document.getElementById("text").value.toLowerCase().trim();
    if (mensajeNormal === "") {
        console.log("necesita un mensaje");
        return;
    }
    let mensajeEncriptado = encriptar(mensajeNormal);
    let cajaEncriptado = document.getElementById("textEncriptado");
    cajaEncriptado.innerText = mensajeEncriptado;
    ocultarImagenYTitulo();

}

function ocultarImagenYTitulo(){
    let imagen = document.getElementById("imagen");
    let titulo = document.getElementById("titulo");
    let botonCopiar = document.getElementById("botonCopiar");
    imagen.classList.remove("md:inline");
    titulo.classList.add("hidden");
    botonCopiar.classList.remove("hidden");
}

function encriptar(mensaje){
    return mensaje.split('')
                .map( letra => esVocal(letra) ? reemplazarVocal(letra) : letra)
                .join("");

}

function esVocal(letra){
    return vocales.indexOf(letra) >= 0; 
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
    if (textEncriptado.trim() === "") {
        console.log("necesita un mensaje");
        return;
    }
    let mensajeDesencriptado = desencriptar(textEncriptado);
    let cajaDesencriptado = document.getElementById("textEncriptado");
    cajaDesencriptado.innerText = mensajeDesencriptado;
    ocultarImagenYTitulo();

}

function desencriptar(mensaje){
    return mensaje.replaceAll("ai", "a")
        .replaceAll("enter", "e")
        .replaceAll("imes", "i")
        .replaceAll("ober", "o")
        .replaceAll("ufat", "u");
}

function btnCopiar(){
    
    let cajaDesencriptado = document.getElementById("textEncriptado");
    navigator.clipboard.writeText(cajaDesencriptado.innerText);
}


