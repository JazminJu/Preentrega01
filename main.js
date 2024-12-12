// Función para mostrar las tablas de multiplicar del 2 al 10 de un número dado
function mostrarTablasMultiplicar(numero) {
    // Constantes para los límites de las tablas de multiplicar
    const MIN_TABLA = 2;
    const MAX_TABLA = 10;
    
    // Variable para almacenar los resultados
    let resultados = '';
  
    // Bucle para iterar desde la tabla de numero hasta la 10
    resultados += `Tabla del ${numero}:\n`;
    for (let j = 1; j <= 10; j++) {
        resultados += `${numero} x ${j} = ${numero * j}\n`;
    }
    resultados += '\n';

    // Mostrar los resultados en una alerta
    alert(resultados);
  }
  
  let numero;
  
  do {
    // Solicitar al usuario un número entero entre 1 y 10
    numero = parseInt(prompt('Introduce un número entero entre 1 y 10 (0 para salir)'));
  
    // Validar que el número esté dentro del rango y no sea 0
    if (numero >= 1 && numero <= 10) {
      mostrarTablasMultiplicar(numero);
    } else if (numero !== 0) {
      alert('Número fuera de rango. Por favor, introduce un número entre 1 y 10.');
    }
  } while (numero !== 0);
  
  // Mensaje de salida
  alert('Programa terminado. ¡Hasta luego!');
  