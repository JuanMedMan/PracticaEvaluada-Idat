// Solicitar al usuario que ingrese el radio del círculo
let radio = prompt("Ingresa el radio del círculo:");

// Verificar si el radio ingresado es un número y es mayor a 0
if (isNaN(radio) || radio <= 0) {
    alert("Por favor, ingresa un radio válido");
} else {
    // Definir la constante PI
    const PI = 3.14;

    // Convertir el radio a número
    radio = parseFloat(radio);

    // Calcular el área del círculo
    let area = PI * Math.pow(radio, 2);

    // Mostrar el área calculada
    alert("El área del círculo es: " + area);
}