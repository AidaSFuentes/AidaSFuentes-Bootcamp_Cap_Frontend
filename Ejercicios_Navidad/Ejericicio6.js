/*
Definir una función que determine si la cadena de texto que se le pasa como parámetro es un palíndromo, 
es decir, si se lee de la misma forma desde la izquierda y desde la derecha. 
Ejemplo de palíndromo complejo: "La ruta nos aporto otro paso natural".
*/

function palindromeChecker(str) {
    const newStr = str.replace(/[\W_]/g, "").toLowerCase();
    const strReversed = newStr.split("").reverse().join("");
    return newStr === strReversed ? "es palindromo" : "no es palindromo";
  }
  
  console.log(palindromeChecker("Ali tomo tila")); // es palindromo
  console.log(palindromeChecker("otra cosa")); // no es palindromo
  console.log(palindromeChecker("Amad a la dama")); // es palindromo
  
