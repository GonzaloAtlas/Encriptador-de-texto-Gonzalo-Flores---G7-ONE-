let textoDesencriptador = document.querySelector(".texto-desencriptado");
let textoEncriptador = document.querySelector(".texto-encriptado");

/*
La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"
*/

function btEncriptar(){
    let tEncriptado = encriptar(textoDesencriptador.value)
    textoEncriptador.value = tEncriptado
    textoDesencriptador.value = "";
    textoEncriptador.style.backgroundImage = "none";
    document.getElementById("deshabilitarBotones").removeAttribute("disabled");
}

function btDesencriptar(){
    let tDesencriptado = desencriptar(textoDesencriptador.value)
    textoEncriptador.value = tDesencriptado
    textoDesencriptador.value = "";
    textoEncriptador.style.backgroundImage = "none";
    document.getElementById("deshabilitarBotones").removeAttribute("disabled");
}

function btCopiar(){
    let copiarBt = document.getElementById("textoACopiar");
    textoEncriptador.value= "";
    copiarBt.select();
    copiarBt.setSelectionRange(0,999999);
    navigator.clipboard.writeText(copiarBt.value);
    alert("El texto se copio al portapapeles")
}

function encriptar(stringEncriptada){
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase()

    for(i = 0; i < matrizCodigo.length; i++){
        if(stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    return stringEncriptada
}

function desencriptar(stringDesncriptada){
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringDesncriptada = stringDesncriptada.toLowerCase()

    for(i = 0; i < matrizCodigo.length; i++){
        if(stringDesncriptada.includes(matrizCodigo[i][1])){
            stringDesncriptada = stringDesncriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }
    return stringDesncriptada
}