function getRan(min, max) {
    return min + Math.floor(Math.random() * (max - min + 1));
  }
  
  function aciertaNumero(maxIntentos = 10) {
    let intentos = 0;
    let correcto = false;
    const vecesAdivinar = getRan(0, 100);
    let entradaUsuario;
    do {
        entradaUsuario = parseInt(prompt("Introduce un numero entre el 0 y el 100"));
      intentos++;
      if (!entradaUsuario) {
        console.log("Entrada No Valida.");
        continue;
      }
      if (entradaUsuario < vecesAdivinar) {
        window.alert(`Tu numero, ${entradaUsuario}, es demasiado bajo! Intentalo de nuevo!`);
      } else if (entradaUsuario > vecesAdivinar) {
        window.alert(`Tu numero, ${entradaUsuario}, es demasiado alto! Intentalo de nuevo!`);
      } else {
        correcto = true;
      }
    } while (intentos < maxIntentos && correcto === false);
    correcto
      ? window.alert(`El numero ${vecesAdivinar} fue adivinado correctamente en los  ${intentos} intentos.`)
      : window.alert(`El numero ${vecesAdivinar} no fue adivinado en los ${intentos}  intentos.`);
  }
  
  aciertaNumero();