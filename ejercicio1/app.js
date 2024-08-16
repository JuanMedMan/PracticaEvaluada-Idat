// Solicitar al usuario que ingrese su edad
let edad = prompt("Ingresa tu edad");

// Verificar si la edad ingresada es un número
if (isNaN(edad)) {
    alert("Por favor, ingresa un número válido");
} else {
    // Convertir la edad a número
    edad = parseInt(edad);

    // Verificar si la persona es mayor de edad
    if (edad >= 18) {
        alert("Eres mayor de edad");
    } else {
        alert("No eres mayor de edad");
    }
}