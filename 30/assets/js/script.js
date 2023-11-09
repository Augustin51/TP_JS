let meilleurInvestissement = [50,10,20,2,80,60,20];
let jour = ["lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi", "dimanche"];
let nombrePetit = meilleurInvestissement[0];
let nombreGrand = meilleurInvestissement[0];
let jourPetit;
let jourGrand;
for(let i = 0; i<8; i++){
    if(nombrePetit>meilleurInvestissement[i]){
        nombrePetit = meilleurInvestissement[i];
    }
}
for(let j = 0; j<8; j++){
    if(nombreGrand<meilleurInvestissement[j]){
        nombreGrand = meilleurInvestissement[j];
    }
}
for(let k = 0; k<8; k++){
    if(nombrePetit==meilleurInvestissement[k]){
        jourPetit = jour[k];
    } if(nombreGrand==meilleurInvestissement[k]){
        jourGrand = jour[k];
    }
}
let prixFinal = nombreGrand - nombrePetit;

document.write('<h2 style="font-size: 30px;">');
document.write("Le meilleur coup à faire cette semaine est d'investir " + jourPetit + " pour l'acheter au prix de " + nombrePetit + "€ et de revendre " + jourGrand + " pour le revendre au prix de " + nombreGrand + "€ pour faire un bénéfice de " + prixFinal + "€.");
document.write("</h2>");