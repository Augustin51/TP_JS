let jour = prompt("Quel jour somme nous ? ").toLowerCase();



let jourSemaine = ["lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi", "dimanche", "lundi"];
let i = 0;
while(i<=10){
    if(jour===jourSemaine[i]){
        document.write("Demain, nous serons " + jourSemaine[i+1]);
        i = 11;
    } else if(i==10) {
        jour = prompt("Merci de saisir un jours de la semaine");
        i = 0
    } else {
        i++;
    }
}
