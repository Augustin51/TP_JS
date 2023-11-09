let nombre = prompt("saisir un nombre");

while(isNaN(nombre)){
    nombre = prompt("Merci de bien saisir un nombre ! (remplacer les virgules par des points)");
}

document.write("Merci, vous avez choisis " + nombre)