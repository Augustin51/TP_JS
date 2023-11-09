let tour = prompt("Combien de tour le manège doit faire ?");
while(isNaN(tour) || tour<0){
    tour = prompt("Merci de saisir combien de tour le manège doit faire");
}

let i = 1;

while(i<=tour){
    document.write("Tour n°" + i + "<br>");
    i++;
}
