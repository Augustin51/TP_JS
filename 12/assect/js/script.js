for (let i = 1; i < 10; i++) {
    if (i % 2 === 0) {
    document.write(i + " est pair <br>");
    } else{
      document.write(i + " est impair <br>");
    }
}


let nombre = prompt("saisir un nombre");
while(isNaN(nombre)){
  nombre = prompt("Merci de saisir un nombre");
}

if (nombre % 2 === 0) {
  document.write(nombre + " est pair");
} else{
  document.write(nombre + " est impair");
}
