let HT = prompt("saisir un prix hors taxes");
while(isNaN(HT) || HT<0){
    HT = prompt("Merci de saisir un prix hors taxes (remplacer les virgule par des points)");
}

HT *= 1.20;
document.write("Le prix TCC est de " + HT + "€");