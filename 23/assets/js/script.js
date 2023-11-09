let chiffreDecimale = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
let chiffreRomains = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];

let nombreD = prompt("saisir un nombre entier positif à convertir en chiffre romain");
while(isNaN(nombreD) || nombreD<=0){
    nombreD = prompt("Merci de choisir un nombre entier positif à convertir en chiffre romain");
}
nombreD = parseInt(nombreD);
let nombreprompt = nombreD;

let nombreR = "";
let i = 0;

while(nombreD>0){
    if(nombreD>=chiffreDecimale[i]){
        while(nombreD>=chiffreDecimale[i]){
            nombreD = nombreD - chiffreDecimale[i];
            nombreR = nombreR + chiffreRomains[i];
        }
    }
    i++;
}
document.write('<h2 style="font-size: 30px;">')
document.write("Votre nombre " + nombreprompt + " devient : " + nombreR);
document.write("</h2>")