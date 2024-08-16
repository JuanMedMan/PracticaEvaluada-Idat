// Solicitar al usuario que ingrese la nota
let nota = prompt("Ingresa la nota del examen (0 a 20):");

// Verificar si la nota ingresada es un número y está dentro del rango permitido
if (isNaN(nota) || nota < 0 || nota > 20) {
    alert("Por favor, ingresa una nota válida entre 0 y 20");
} else {
    // Convertir la nota a número
    nota = parseFloat(nota);

    // Verificar si la nota es aprobatoria
    if (nota >= 11) {
        alert("Aprobaste");
    } else {
        alert("Reprobaste");
    }
}