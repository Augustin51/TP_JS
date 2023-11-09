let numMois = prompt("Saisir le numéro d'un mois");
while(isNaN(numMois) || numMois<=0 || numMois>12){
    numMois = prompt("Merci de saisir le numéro d'un mois");
}

let mois = ["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "âout", "septembre", "octobre", "novembre", "décembre"];

let jours = ["31", "28", "31", "30", "31", "30", "31", "31", "30", "31", "30", "31"];


document.write("Le mois de " + mois[numMois-1] + " comporte " + jours[numMois-1]);
