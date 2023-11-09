function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
let aleatoir = getRandomInt(100);

let chiffoumi = prompt("Que choissisez-vous entre : 'pierre', 'feuille' ou 'ciseau' ?");
while(chiffoumi!="pierre" && chiffoumi!="feuille" && chiffoumi!="ciseau"){
    chiffoumi = prompt("Merci de saisir soit 'pierre', soit 'feuille', soit 'ciseau'");
}
let ordi;


if(aleatoir<=33){
    ordi = "pierre";
} else if(aleatoir<=66){
    ordi = "feuille";
} else {
    ordi = "ciseau";
}

if(ordi===chiffoumi){
    document.write("L'ordinateur à choisis : " + ordi + "<br> EGALITER !")
} else if(ordi==="pierre" && chiffoumi==="feuille" || ordi==="feuille" && chiffoumi==="ciseau" || ordi==="ciseau" && chiffoumi==="pierre"){
    document.write("L'ordinateur à choisis : " + ordi + "<br> Vous avez GAGNER")
} else {
    document.write("L'ordinateur à choisis : " + ordi + "<br> Vous avez PERDU")
}

