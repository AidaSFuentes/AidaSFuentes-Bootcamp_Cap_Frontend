/*
Crear una función que devuelva un determinado número de números primos.
*/

function isPrime(num) {
    for (let i = 2, s = Math.sqrt(num); i <= s; i++)
      if (num % i === 0) return false;
    return num > 1;
  }
  
  function numerosPrimos(numPrimos = 100) {
    const primosArray = [];
    let number = 2;
    while (primosArray.length < numPrimos) {
      if (isPrime(number)) primosArray.push(number);
      number++;
    }
    return primosArray;
  }
  
  window.alert(numerosPrimos());