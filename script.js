
function potencia(base, expo) {


    let resultadoPotencia = 1;

    for (i = 0; i < expo; i++) {
        resultadoPotencia = resultadoPotencia * base;
    }
    return (resultadoPotencia);
}


function factorial(num) {

    let cant = num - 1;

    let res = num;

    while (cant > 0) {
        res = cant * res;
        cant = cant - 1;
    }
    return (res)

}

let opcion = (prompt("Ingrese 1 para calcular potencia, 2 para calcular factorial, o 0 para salir"));
let resultado;

let base; 
let expo;
let num;

do {

    switch (opcion) {
        case "1":
            base = (prompt("Ingrese base"));

            expo = (prompt("Ingrese exponente"));

            resultado = potencia(base, expo);
            break
        case "2":
            num = (prompt("Ingrese un numero"));

            resultado = factorial(num);
            break
        case "0":
            alert("gracias vuelvan prontos!");
            break
        default:
            alert("Ingreso una opcion no valida");
            break
    }
    if (opcion == 1 || opcion == 2) {
        alert(resultado);
    }
    if (opcion != 0) {
        opcion = (prompt("Ingrese 1 para calcular potencia, 2 para calcular factorial, o 0 para salir"));        
    }

} while (opcion != 0);
