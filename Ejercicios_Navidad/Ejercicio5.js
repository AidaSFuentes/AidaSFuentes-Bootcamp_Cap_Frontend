/*
Crear una función que valide un NIF
*/

function validateDNI(dni) {
    var numero, letr, letra;
    var expresion_regular_dni = /^\d{8}[a-zA-Z]$/;

    dni = dni.toUpperCase();

    if(expresion_regular_dni.test(dni) === true){
        numero = dni.substr(0,dni.length-1);
        letr = dni.substr(dni.length-1,1);
     numero = numero % 23;
     letra='TRWAGMYFPDXBNJZSQVHLCKET';
     letra=letra.substring(numero,numero+1);
    if (letra!=letr.toUpperCase()) {
        alert('DNI erroneo, la letra del NIF no se corresponde');
        }else{
        alert('DNI correcto');
        }
    }else{
        alert('DNI erroneo, formato no válido');
    }
}
console.log(validateDNI("77777777M"));
console.log(validateDNI("48489624N"));
console.log(validateDNI("Z48489624"));