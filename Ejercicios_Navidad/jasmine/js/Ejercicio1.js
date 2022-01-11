/*
Crear una función que devuelva un numero aleatorio (Math.random()) dentro del rango dado.
*/

function getRan(min, max) {
    if(min > max) throw new RangeError ("Minimum number should be equal or lower than the maximum number")
    return min + Math.floor(Math.random() * (max - min + 1));
  }
  
  console.log(getRan(1, 10));