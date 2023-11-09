document.write("<br><br>1 -- afficher une suite de nombres de 1 à 10 : <br>");
for(let ex1 = 1; ex1<=10; ex1++){
    document.write(ex1 + ",  ");
}

document.write("<br><br>2 -- afficher une suite de nombres de 10 à 1 : <br>");
for(let ex2 = 10; ex2>=1; ex2--){
    document.write(ex2 + ",  ");
}

document.write("<br><br>3 -- afficher les nombres pairs inférieurs à 100 : <br>");
for(let ex3 = 1; ex3<=100; ex3++){
    if(ex3%2==0){
        document.write(ex3 + ",  ");
    }
}

document.write("<br><br> 4 -- afficher la table de multiplication de 7 : <br>");
for(let ex4 = 1; ex4<=70; ex4++){
    if(ex4%7==0){
        document.write(ex4 + ",  ");
    }
}

document.write("<br><br> 5 -- afficher toutes les tables de multiplication de 1 à 10 : <br>");
for(let ex5 = 1; ex5<=10; ex5++){
    for(let ex5n2 = 1; ex5n2<=10; ex5n2++){
        document.write(ex5 + " X " + ex5n2 + " = " + ex5*ex5n2 + "<br>");
    }
}

document.write("<br><br> 6 -- calculer la somme des nombres de 13 à 33 : <br>");
let ex6n2 = 0;
for(let ex6 = 13; ex6<=33; ex6++){
    ex6n2 =+ ex6;
    document.write("le somme de 13 à 33 est " + ex6n2);
}

document.write("<br><br> 7 -- calculer le factoriel de 10 (10! = 10 x 9 x 8 x 7 x 6 x 5 x 4 x 3 x 2 x 1 = 3628800) <br>");
let ex7n2 = 10;
document.write('10');
for(let ex7 = 9; ex7>=1; ex7--){
    ex7n2 = ex7n2 * ex7;
    document.write(" X " + ex7);
}
document.write(" = " + ex7n2);

document.write("<br><br> 8 -- calculer la somme des nombres impairs entre 10 et 30 <br>");
let ex8n2 = 11;
for(let ex8 = 12; ex8<=30; ex8++){
    if(ex8%2!=0){
        ex8n2 += ex8;
        document.write(" + " + ex8);
    }
}
document.write(" = " + ex8n2);

document.write("<br><br> 9 -- écrire une fonction pour convertir des minutes en heures et minutes <br> // /!\ si les minutes sont inférieures à 60, on affiche uniquement les minutes <br> // /!\ si les minutes sont inférieures à 10, on affiche les minutes avec 2 chiffres '03' et non '3' <br>");
function convertir(){
    while(ex9minutesdeb-60 >= 0 && ex9minutesfin-60 >= 0){
        ex9minutesfin -= 60;
        ex9heures += 1;
    }
    if(ex9minutesdeb<10 || ex9minutesfin<10){
        ex9minutesfin = "0" + ex9minutesfin;
    }
}
let ex9minutesdeb =  225;
let ex9minutesfin = ex9minutesdeb;
let ex9heures = 0;
convertir();
if(ex9heures>=1){
    document.write(ex9minutesdeb + " minute(s) = " + ex9heures + " heure(s) et " + ex9minutesfin + " minute(s)")
} else {
    document.write(ex9minutesdeb + " minute(s) = " + ex9minutesfin + " minute(s)")
}

document.write("<br><br> 10 -- écrire une fonction pour calculer la somme des chiffres d'un nombre <br> // /!\ on ne peut pas utiliser de chaîne de caractères <br> // /!\ on ne peut pas utiliser de tableau <br> // /!\ le nombre doit être un entier positif <br> // /!\ le nombre peut avoir plusieurs chiffres (exemples : 1234 666 123456789) <br>")
let ex10 = 2023;
let ex10n2;
function sommeNombre(){
    
}