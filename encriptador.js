const textArea = document.querySelector(".texto"); /*Capturar lo del textarea */
const mensaje = document.querySelector(".mensaje");


//La letra "e" es convertida para "enter"
//La letra "i" es convertida para "imes"
//La letra "a" es convertida para "ai"
//La letra "o" es convertida para "ober"
//La letra "u" es convertida para "ufat"

function btnEncriptar(){
    const textoEncriptado = encriptar(textArea.value)
    mensaje.value = textoEncriptado
    textArea.value = "";
    mensaje.style.backgroundImage = "none";
}

function encriptar(stringEncriptado){

    let matrizCodigo = [["e","enter"], ["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringEncriptado = stringEncriptado.toLowerCase(); //Para convertir en minusacula

    for(let i = 0; i < matrizCodigo.length; i++){

        if(stringEncriptado.includes(matrizCodigo[i][0])){

            stringEncriptado = stringEncriptado.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);

        }

    }

    return stringEncriptado;
    
}

function btnDesencriptar(){
    const textoEncriptado = desencriptar(textArea.value)
    mensaje.value = textoEncriptado
    textArea.value = "";
}

function desencriptar(stringDesencriptado){

    let matrizCodigo = [["e","enter"], ["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringDesencriptado = stringDesencriptado.toLowerCase(); //Para convertir en minusacula

    for(let i = 0; i < matrizCodigo.length; i++){

        if(stringDesencriptado.includes(matrizCodigo[i][1])){

            stringDesencriptado = stringDesencriptado.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);

        }

    }

    return stringDesencriptado;
    
}

//CODIGO PARA COPIAR TEXTO
function copyText(){     
    var text = mensaje;
    text.select();
    document.execCommand("copy");
    alert("Texto copiado al portapapeles:" + text.value);

}

