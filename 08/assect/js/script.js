let moy = prompt("Saisir votre moyenne du bac");
while(isNaN(moy) || moy>20 || moy<0){
    moy = prompt("Merci de saisir votre moyenne du bac (remplacer les virgules par des points)");
}

if(moy<10){
    document.write("Vous êtes recalé car votre moyenne est en dessous de 10");
} else if(moy>=10, moy<12) {
    document.write("Vous êtes reçu car votre moyenne est au dessus ou égale à 10");
} else {
document.write("Vous êtes reçu et vous avais obtenue une mention car votre moyenne est au dessus ou égale à 12");
}

