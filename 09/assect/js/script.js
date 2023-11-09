let nombre1 = prompt("saisir premier nombre : ");
while(isNaN(nombre1)){
    nombre1 = prompt("Merci de saisir votre premier nombre");
}
let nombre2 = prompt("saisir deuxième nombre : ");
while(isNaN(nombre2)){
    nombre2 = prompt("Merci de saisir votre deuxième nombre");
}
let nombre3 = prompt("saisir votre troisième nombre : ");
while(isNaN(nombre3)){
    nombre3 = prompt("Merci de saisir votre troisième nombre");
}

nombre1 = parseInt(nombre1);
nombre2 = parseInt(nombre2);
nombre3 = parseInt(nombre3);

if(nombre1>nombre2){
    nombre1 = nombre3 * 2;
} else{
    nombre1++;
    if(nombre2>nombre3){
        nombre1 = nombre1 + nombre3 * 3;
    } else{
        nombre1 = 0;
        nombre3 = nombre3 * 2 + nombre2;
    }
} 

document.write("Votre nombre 1 est devenu " + nombre1 + ". <br>");
document.write("Votre nombre 2 est devenu " + nombre2 + ". <br>");
document.write("Votre nombre 3 est devenu " + nombre3 + ".");