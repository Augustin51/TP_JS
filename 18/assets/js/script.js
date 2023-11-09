function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

let aleatoir = getRandomInt(100);
console.log(aleatoir);
let nombreTrouver = prompt("Le but du jeu est très simple, Je pense à un nombre entre 0 et 100 et tu doit trouver quelle est ce nombre (tu à 6 essais!)");
while(isNaN(nombreTrouver) || nombreTrouver<1 || nombreTrouver>100){
    nombreTrouver = prompt("Merci de saisir un nombre entre 1 et 100");
}

let i = 1
let a;
let nombreTrouver2;
while(i<6){
    a = 6-i
    if(nombreTrouver<aleatoir){
        nombreTrouver2 = prompt("Le nombre cherché est plus grand que " + nombreTrouver + " (essais restant : " + a + ")");
        while(isNaN(nombreTrouver2) || nombreTrouver2<1 || nombreTrouver2>100){
            nombreTrouver2 = prompt("Merci de saisir un nombre entre 1 et 100, Le nombre cherché est plus grand que " + nombreTrouver + " (essais restant : " + a + ")");
        } nombreTrouver = nombreTrouver2
    } else if(nombreTrouver>aleatoir){
        nombreTrouver2 = prompt("Le nombre cherché est plus petit que " + nombreTrouver + " (essais restant : " + a + ")");
        while(isNaN(nombreTrouver2) || nombreTrouver2<1 || nombreTrouver2>100){
            nombreTrouver2 = prompt("Merci de saisir un nombre entre 1 et 100, Le nombre cherché est plus petit que " + nombreTrouver + "  (essais restant : " + a + ")");
        } nombreTrouver = nombreTrouver2
    } else if(nombreTrouver==aleatoir){
        a = i;
        document.write("Bravo, le nombre cherché était bien " + aleatoir + ". <br> Vous avez trouver en " + a + " essais.")
        i = 7;
    }
    i++;
}
if(i==6){
    document.write("Dommage, le nombre cherché était " + aleatoir + ".")
}


