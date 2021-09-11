function sumar(){
    var numero_uno = parseInt(document.getElementById("valor_numero1").value);
    var numero_dos = parseInt(document.getElementById("valor_numero2").value);
    
    document.getElementById("result").innerHTML = numero_uno + numero_dos;
}

function restar(){
    var numero_uno = parseInt(document.getElementById("valor_numero1").value);
    var numero_dos = parseInt(document.getElementById("valor_numero2").value);

    document.getElementById("result").innerHTML = numero_uno - numero_dos;
}

function multiplicar(){
    var numero_uno = parseInt(document.getElementById("valor_numero1").value);
    var numero_dos = parseInt(document.getElementById("valor_numero2").value);
    
    document.getElementById("result").innerHTML = numero_uno * numero_dos;
}

function dividir(){
    var numero_uno = parseInt(document.getElementById("valor_numero1").value);
    var numero_dos = parseInt(document.getElementById("valor_numero2").value);
    
    document.getElementById("result").innerHTML = numero_uno / numero_dos;
}