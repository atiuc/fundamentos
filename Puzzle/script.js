var numeros = document.getElementById("numeros");
var letras = document.getElementById("letras"); 


function b1() {
    var aux = numeros.innerText;
   
    if (aux == "1, 2, 3, 4, 5, 6, 7, 8, 9, 0") {
        letras.innerHTML="A";
    } else {       
    if (aux == '') {
    numeros.innerHTML="1";    
}  
    }
}

function b2() {
     var aux = numeros.innerText;
     var aux2 = letras.innerText;

     if (aux2=="A") {
         letras.innerHTML="A,B";
    } else {
         if (aux2=='' && aux=="1, 2, 3, 4, 5, 6, 7, 8, 9, 0") {
             alert("Falta una letra")
         } else {
     
     if(aux == "1"){
         numeros.innerHTML="1, 2";     
     } else {
         if(aux == '') {
         alert("Falta un número");
          }   
     }
 }
}
}
  
 function b3() {
    var aux = numeros.innerText;
    var aux2 = letras.innerText;

    if (aux2=="A,B") {
        letras.innerHTML="A,B,C";
   } else {
        if (aux2=='' && aux=="1, 2, 3, 4, 5, 6, 7, 8, 9, 0") {
            alert("Falta una letra")
        } else {

    if(aux == "1, 2"){
        numeros.innerHTML="1, 2, 3";     
    } else {
        if(aux == "1") {
        alert("Falta un número");
         }   
    }
}
   }
}
 
function b4() {
    var aux = numeros.innerText;
    var aux2 = letras.innerText;

    if (aux2=="A,B,C") {
        letras.innerHTML="A,B,C,D";
   } else {
        if (aux2=='' && aux=="1, 2, 3, 4, 5, 6, 7, 8, 9, 0") {
            alert("Falta una letra")
        } else {

    if(aux == "1, 2, 3"){
        numeros.innerHTML="1, 2, 3, 4";     
    } else {
        if(aux == "1, 2") {
        alert("Falta un número");
         }   
    }
}
   }
}

function b5() {
    var aux = numeros.innerText;
    var aux2 = letras.innerText;

    if (aux2=="A,B,C,D") {
        letras.innerHTML="A,B,C,D,E";
   } else {
        if (aux2=='' && aux=="1, 2, 3, 4, 5, 6, 7, 8, 9, 0") {
            alert("Falta una letra")
        } else {

    if(aux == "1, 2, 3, 4"){
        numeros.innerHTML="1, 2, 3, 4, 5";     
    } else {
        if(aux == "1, 2, 3") {
        alert("Falta un número");
         }   
    }
}
   }
}

function b6() {
    var aux = numeros.innerText;
    var aux2 = letras.innerText;

    if (aux2=="A,B,C,D,E") {
        letras.innerHTML="A,B,C,D,E,F";
   } else {
        if (aux2=='' && aux=="1, 2, 3, 4, 5, 6, 7, 8, 9, 0") {
            alert("Falta una letra")
        } else {

    if(aux == "1, 2, 3, 4, 5"){
        numeros.innerHTML="1, 2, 3, 4, 5, 6";     
    } else {
        if(aux == "1, 2, 3, 4") {
        alert("Falta un número");
         }   
    }
}
   }
}

function b7() {
    var aux = numeros.innerText;
    var aux2 = letras.innerText;

    if (aux2=="A,B,C,D,E,F") {
        letras.innerHTML="A,B,C,D,E,F,G";
   } else {
        if (aux2=='' && aux=="1, 2, 3, 4, 5, 6, 7, 8, 9, 0") {
            alert("Falta una letra")
        } else {

    if(aux == "1, 2, 3, 4, 5, 6"){
        numeros.innerHTML="1, 2, 3, 4, 5, 6, 7";     
    } else {
        if(aux == "1, 2, 3, 4, 5") {
        alert("Falta un número");
         }   
    }
}
   }
}

function b8() {
    var aux = numeros.innerText;
    var aux2 = letras.innerText;

    if (aux2=="A,B,C,D,E,F,G") {
        letras.innerHTML="A,B,C,D,E,F,G,H";
   } else {
        if (aux2=='' && aux=="1, 2, 3, 4, 5, 6, 7, 8, 9, 0") {
            alert("Falta una letra")
        } else {

    if(aux == "1, 2, 3, 4, 5, 6, 7"){
        numeros.innerHTML="1, 2, 3, 4, 5, 6, 7, 8";     
    } else {
        if(aux == "1, 2, 3, 4, 5, 6") {
        alert("Falta un número");
         }   
    }
}
   }
}

function b9() {
    var aux = numeros.innerText;
    var aux2 = letras.innerText;

    if (aux2=="A,B,C,D,E,F,G,H") {
        letras.innerHTML="A,B,C,D,E,F,G,H,I";
   } else {
        if (aux2=='' && aux=="1, 2, 3, 4, 5, 6, 7, 8, 9, 0") {
            alert("Falta una letra")
        } else {
    if(aux == "1, 2, 3, 4, 5, 6, 7, 8"){
        numeros.innerHTML="1, 2, 3, 4, 5, 6, 7, 8, 9";     
    } else {
        if(aux == "1, 2, 3, 4, 5, 6, 7") {
        alert("Falta un número");
         }   
    }
}
   }
}

function b0() {
    var aux = numeros.innerText;
    var aux2 = letras.innerText;

    if (aux2=="A,B,C,D,E,F,G,H,I") {
        letras.innerHTML="A,B,C,D,E,F,G,H,I,J";
   } else {
        if (aux2=='' && aux=="1, 2, 3, 4, 5, 6, 7, 8, 9, 0") {
            alert("Falta una letra")
        } else {
    if(aux == "1, 2, 3, 4, 5, 6, 7, 8, 9"){
        numeros.innerHTML="1, 2, 3, 4, 5, 6, 7, 8, 9, 0";     
    } else {
        if(aux == "1, 2, 3, 4, 5, 6, 7, 8") {
        alert("Falta un número");
         }   
    }
}
   }
}