// Solicitar al usuario que ingrese dos números
let numero1 = prompt("Ingresa el primer número:");
let numero2 = prompt("Ingresa el segundo número:");

// Verificar si los números ingresados son válidos
if (isNaN(numero1) || isNaN(numero2)) {
    alert("Por favor, ingresa números válidos");
} else {
    // Convertir los valores a números
    numero1 = parseFloat(numero1);
    numero2 = parseFloat(numero2);

    // Calcular las operaciones
    let suma = numero1 + numero2;
    let resta = numero1 - numero2;
    let producto = numero1 * numero2;
    
    // Mostrar los resultados
    alert("Suma: " + suma);
    alert("Resta: " + resta);
    alert("Producto: " + producto);
    
    // Manejar la división con verificación de división por 0
    if (numero2 !== 0) {
        let division = numero1 / numero2;
        alert("División: " + division);
    } else {
        alert("No se puede dividir por 0");
    }
}