let heure = prompt("Saisir l'heure");
while(isNaN(heure) || heure<0 || heure>24){
    heure = prompt("Merci de saisir l'heure")
}
let minute = prompt("Saisir les minutes");
while(isNaN(minute) || minute<0 || minute>60){
    minute = prompt("Merci de saisir les minutes")
}
let seconde = prompt("Saisir les secondes");
while(isNaN(seconde) || seconde<0 || seconde>60){
    seconde = prompt("Merci de saisir les secondes")
}


heure = parseInt(heure);
minute = parseInt(minute);
seconde = parseInt(seconde);

seconde+=1;
if(seconde==60){
    seconde = "00";
    minute+= 1;
} if(minute==60){
    minute = "00";
    heure+= 1;
} if(heure==24){
    heure = "00";
}

document.write("Dans une seconde il sera " + heure + "h " + minute + "m " + seconde + "s");