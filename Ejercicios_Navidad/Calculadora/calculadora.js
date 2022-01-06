let numero1 = 0;
let numero2 = 0;
let signo = "";

        
        // Numeros
        let numeros = document.querySelectorAll('.num');
        // Operadores que requieren 2 números
        let op1 = document.querySelectorAll('.op1');
        // Operadores que solo necesitan 1 número
        let op2 = document.querySelectorAll('.op2');
    
        // Igual y Reset
        let igual = document.getElementById("igual");
        let borrar = document.getElementById("borrar");
        let retroceso = document.getElementById("retroceso");
        let borradoParcial = document.getElementById("borradoparcial");
        
         //Recorro y agrego el evento onclick
        numeros.forEach(num => num.addEventListener('click', function() {
            result.textContent += num.innerText;
        }));
        op1.forEach(btn => btn.addEventListener('click', function() {
            numero1 = result.textContent;
            signo = btn.innerText;
            limpiar();
        }));
        op2.forEach(btn => btn.addEventListener('click', function() {
            numero1 = result.textContent;
            signo = btn.innerText;
            resolver();
        }));

       igual.addEventListener('click', function(){
            numero2 = result.textContent;
            resolver();
        });
    
        borrar.addEventListener('click', function() {
            resetearValores();
        });
    
    
    function limpiar() {
        result.textContent = "";
    }
    
    function resetearValores() {
        result.textContent = "";
        numero1 = 0;
        numero2 = 0;
        signo = "";
    }

    function resolver() {
        let fin = 0;
        switch(signo) {
            case "+":
                fin = parseFloat(numero1) + parseFloat(numero2);
                break;
            case "-":
                fin = parseFloat(numero1) - parseFloat(numero2);
                break;
            case "x":
                fin = parseFloat(numero1) * parseFloat(numero2);
                break;
            case "/":
                fin = parseFloat(numero1) / parseFloat(numero2);
                break;
            case "%":
                fin = parseFloat(numero1) % parseFloat(numero2);
                break;
            case "2\\/''":
                fin = Math.sqrt(numero1);
                 break;
            case "x\\/''":
                fin = Math.pow(numero2, Math.pow(numero1, (-1)));
                break;
            case "^2":
                fin = Math.pow(numero1, 2);
                break;
            case "^3":
                fin = Math.pow(numero1, 3);
                break;
             case "^x":
                fin = Math.pow(numero1, numero2);
                break;    
            default:
                if(numero1 == 0) {
                    fin = numero2;
                } else {
                    fin = numero1;
                }
        }
        resetearValores();
        result.textContent = fin;
    }