/*
Crear la función constructora del juego Adivina el Número.
*/
 var content = document.querySelector(".content");
 var oP = document.querySelector(".cont1 p");
 var btn = document.querySelector("button");
 var resetBtn = document.querySelector(".reset");
 var clientNum = document.querySelector("input");
 var oldNum = document.querySelector(".cont3-box");
 var resultBox = document.querySelector(".cont2 span");
 var infoBox = document.querySelector(".cont4 span");
 var oBtn = document.querySelector("button");
 var timesNum = 0;
 var radomNum = parseInt(Math.random()*100);
 oBtn.onclick = function(){
     var oValue = clientNum.value;
     if(oValue == ""){//Formato de entrada del número de control
                  oP.innerText = "¿Por qué me haces adivinar el carácter vacío? ¡Ingresa el número!";
     }else if(oValue < 0 || oValue > 100){
                  oP.innerText = "Siempre que un número entero positivo entre 0-100";
     }else if(isNaN(oValue)){
                  oP.innerText = "¡Solo admite formato digital, no lo complete al azar, señor!";
     }else{//Llame a la función lógica después de que el formato sea correcto y no esté vacío
         content.className = "content"; //  Después de confirmar que la entrada es un número, muestre la interfaz de resultados
         innerText(oValue);//Llame a la función innerText de "Agregar estructura de tramo de datos medidos"
         timesNum++;//  Agregue una oportunidad para grabar una vez, después de diez veces, el estado del cuadro de entrada está cerrado
         if(timesNum == 10){
             clientNum.disabled = true;
             oBtn.disabled = true;
             content.className = "content gameover";//  Después de diez veces, aparece el fin del juego.
         }else{
             checkFun(oValue)
         }
         oP.innerText = "";//Si el formato es correcto por segunda vez, elimine el texto de recordatorio incorrecto
     }
     clientNum.value = ""; //Destruye el contenido de la entrada después de hacer clic en el botón para enviarlo.
 }
 function innerText(oValue){
     var oldNumBox = document.createElement("span");
     oldNumBox.className = 'old-num';
     oldNumBox.innerText = oValue;
     oldNum.appendChild(oldNumBox);
 }
 function checkFun(oValue){
 
     console.log(oValue);
     if(oValue > radomNum){
         resultBox.className = "info-up";
                  resultBox.innerText = "¡Tu conjetura es alta!";
         infoBox.className = "error";
                  infoBox.innerText = "¡Error!";
     }else if(oValue < radomNum){
         resultBox.className = "info-down";
                  resultBox.innerText = "¡Tu conjetura es baja!";
         infoBox.className = "error";
                  infoBox.innerText = "¡Error!";
     }else{
         resultBox.className = "success";
                  resultBox.innerText = "¡Tu conjetura es correcta!";
         infoBox.className = "success";
                  infoBox.innerText = "¡Felicitaciones por su respuesta!";
     }
 }
 resetBtn.onclick = function(){
     //  El juego se reinicia, actualiza la página.
     window.location.reload(true);
 }