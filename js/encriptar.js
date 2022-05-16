/*campos de texto*/
var ingreseELTexto = document.querySelector("#ingrese-el-texto");
var textoEncriptado = document.querySelector("#texto-encriptado");

/*botones*/

var botonEncriptar = document.querySelector("#encriptar");
var botonDesencriptar = document.querySelector("#desencriptar");
var botonCopiar = document.querySelector("#copiar");



/*funcion encriptar*/

botonEncriptar.addEventListener("click", function(event){
    event.preventDefault();
    validartexto();
});


/*funcion copiar*/

botonCopiar.addEventListener("click", function(event){
    event.preventDefault();
    textoEncriptado.select();
    document.execCommand("copy");
    formulario.reset();
});

/*fuction desencrptar*/


botonDesencriptar.addEventListener("click",function(event){
    event.preventDefault();
    var mensajeEncriptado = ingreseELTexto.value;
    var mensaje = mensajeEncriptado.replaceAll("enter","e").replaceAll("imes","i").replaceAll("ober","o").replaceAll("ai","a").replaceAll("ufat","u");
    textoEncriptado.value = mensaje;
});

/*validar Texto y encriptar*/


function validartexto(){

    var textoingresado = ingreseELTexto.value;

    
    if (!/^([a-z,\s,])*$/.test(textoingresado))
    {
        alert("El mensaje " + textoingresado + " contiene caracteres que no son validos, por favor valide que el mensaje solo contenga letras en minuscula y sin acentos");

    }

    else if(textoingresado == ""){
        alert("Por favor agregue un mesaje");
    }

    else {

        var mensaje = ingreseELTexto.value;
        var mensajeEncriptado = mensaje.replaceAll("e","enter").replaceAll("i","imes").replaceAll("o","ober").replaceAll("a","ai").replaceAll("u","ufat");
        textoEncriptado.value = mensajeEncriptado;

    }

};



