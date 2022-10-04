let nombreDeUsuario;
let contraseña;
let contador = 0;
let item1 = 0;
let item2 = 0;
let tax = 0;
let retorno = 0;
let costo = 0;

function registrarUsuario() {
    nombreDeUsuario = prompt("Ingrese un nombre usuario para registrarse");
    contraseña = prompt("Ingrese una contraseña para registrarse");
}

function loguearse() {
    let logUser = prompt("Introduzca su usuario para loguearse");
    let logContraseña = prompt("Introduzca su contraseña para loguearse");

    if (logUser === nombreDeUsuario && logContraseña === contraseña) {
        alert("Bienvenido " + nombreDeUsuario + " Ya pudes usar la calculadora");
    } else {
        alert("Nombre o contraseña incorrectos, intentelo nuevamente");
        contador++;
        if (contador === 2) {
            alert("Agotaste los intentos, vuelve a recargar la pagina");
        } else {
            loguearse();
        }
    }
}

function craftearPocionVeneno() {
    item1 = prompt("Introduzca el precio de Crenellated Burdock:");
    item2 = prompt("Introduzca el precio de Brightleaf Comfrey:");
    tax = prompt("Introduzca el precio del impuesto:");
    retorno = prompt("Introduzca la cantidad de retorno con un punto delante");

    item1 = item1 * 8;
    item2 = item2 * 4;
    costo = item1 + item2 + tax;
    retorno = costo * retorno;

    alert("El costo de la pocion de veneno es: " + costo + " con un retorno de: " + retorno);
}

registrarUsuario();
loguearse();
craftearPocionVeneno();