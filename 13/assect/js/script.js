let nombre = prompt("saisir un nombre entre 50 et 100");

switch(isNaN(nombre)){
    case true:
        alert("saisisez un nombre entre 50 et 100 !");
        break;
    case false:
        while(nombre<50 || nombre>100){
            nombre = prompt("merci de bien saisir un nombre entre 50 et 100")
        }
        document.write("Bien joué");
        break;
}