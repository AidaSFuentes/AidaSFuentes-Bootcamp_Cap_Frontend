/*
Crear una función que devuelva un numero aleatorio (Math.random()) dentro del rango dado.
*/

function getRan(min, max) {
    return min + Math.floor(Math.random() * (max - min + 1));
  }
  
  console.log(getRan(1, 10));