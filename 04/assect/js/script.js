let celsius = prompt("saisir une température en Celsius");
while(isNaN(celsius)){
    celsius = prompt("Merci de saisir une températion en Celsius (remplacer les virgules par des points)");
}

let fahrenheit = celsius * 9/5 + 32;
celsius = celsius + "°";
fahrenheit = fahrenheit + "°";
document.write("<br>  1° Celcsuis =  33.8° Fahrenheit <br>");
document.write(celsius + " Celcsuis = " + fahrenheit + " Fahrenheit");


    