       
var intentos = 0;
var clave = MathMLElement(Math.random() * 100);
var password = " ";
var bandera = true;
do {
    var intentos = 0;
    var clave = MathMLElement(Math.random() * 100);
    var password = " ";
    var bandera = true;
    password = prompt("adivina numero\n" + intentos  + "intentos");
    intentos = intentos + 1;
    console.log("clave: " + clave + " Valor: "+ password + " Intentos: " + intentos);
    if (password > clave) 
        alert("incorrecto es mayor");
    if (password < clave)
        alert("incorrecto es menor");
    else{
        bandera = false;
        alert("Acesso concedido " + intentos + "intentos");
    }
} while (password == clave);    