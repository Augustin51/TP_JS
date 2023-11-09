let nombre1 = prompt("saisir un premier nombre");
while(isNaN(nombre1)){
    nombre1 = prompt("Merci de saisir votre premier nombre");
}
let nombre2 = prompt("saisir un deuxième nombre");
while(isNaN(nombre2)){
    nombre2 = prompt("Merci de saisir votre deuxième nombre");
}

nombre1 = parseInt(nombre1);
nombre2 = parseInt(nombre2);

if (nombre1>nombre2) {
    document.write("Votre premier nombre : " + nombre1 + " est le grand que votre deuxième nombre : " + nombre2 + ".");
} else if (nombre1==nombre2) {
    document.write("Votre premier nombre : " + nombre1 + " est égale à votre deuxième nombre : " + nombre2 + ".");
} else {
    document.write("Votre premier nombre : " + nombre1 + " est le petit que votre deuxième nombre : " + nombre2 + ".");
}


        