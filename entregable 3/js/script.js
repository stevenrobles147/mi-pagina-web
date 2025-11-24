function realizarOperacion(num1, num2, operacion) {
    if (operacion === "suma") {
        return num1 + num2;

    } else if (operacion === "resta") {
        return num1 - num2;

    } else if (operacion === "multiplicacion") {
        return num1 * num2;

    } else if (operacion === "division") {
        if (num2 === 0) {
            return "Error: No se puede dividir por cero";
        }
        return num1 / num2;

    } else {
        return "Operación no válida";
    }
}

let continuar = true;

while (continuar) {

    let num1 = Number(prompt("Ingrese el primer número:"));
    let num2 = Number(prompt("Ingrese el segundo número:"));
    let operacion = prompt("Ingrese la operación (suma, resta, multiplicacion, division) o 'salir' para terminar:");

    if (operacion === "salir") {
        continuar = false;
        alert("Programa finalizado.");
        break;
    }

    let resultado = realizarOperacion(num1, num2, operacion);

    alert("Resultado: " + resultado);
    
}


