let nombre = prompt("saisir un chifre entre 2 et 9");
while(isNaN(nombre) || nombre<2 || nombre>9){
    nombre = prompt("Merci de saisir un chiffre entre 2 et 9");
}

for(let i = 1; i<=10; i++){
    document.write(nombre + " X " + i + " = " + nombre*i + "<br>")
}
