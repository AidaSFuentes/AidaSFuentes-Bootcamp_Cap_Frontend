/*
Crear la función constructora del juego Adivina el Número.
*/
 export default function Game(maxIntentos, valores){
     var numeroBuscado;
     this.intentos;
     this.encontrados;
     this.mensaje;
     this.Inicializa = function(){
         numeroBuscado = aleatorio(1, valores);
         console.debug()
     }
 }
 