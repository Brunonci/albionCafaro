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





registrarUsuario();
loguearse();
