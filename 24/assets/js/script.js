document.write(" <body style='width: 95%; margin: 0 auto;'> <p style='font-zize: 20px; font-weight: bold;'> 1 - afficher avec une boucle For les chiffres de 0 à 9 dans une table HTML sur une seule ligne </p> <table style='border-spacing: 0; border: 1px blue solid; border-left: none; margin-left: 50px;'> <tbody> <tr>");

for(let i = 0; i<=9; i++){
    document.write("<td style='border-left: 1px blue solid; width: 20px; height: 25px; text-align: center;'>" + i + "</td>");
}

document.write("</tbody> </table> </tr> <hr> <p style='font-zize: 20px; font-weight: bold;'> 2 - une cellule par ligne </p> <table style='border-spacing: 0; border-top: 1px blue solid; margin-left: 50px;'> <tbody>");

for(let j = 0; j<=9; j++){
    document.write("<tr> <td style='border-bottom: 1px blue solid; border-right: 1px blue solid; border-left: 1px blue solid; width: 20px; height: 25px; text-align: center;'>" + j + "</td> </tr>");
}
document.write("</tbody> </table> <hr> <p style='font-zize: 20px; font-weight: bold;'> 3 - Les cellules paire en rouge et les impaires en vert </p> <table style='border-spacing: 1px; margin-left: 50px;'> <tbody> <tr>");

for(let k = 0; k<=9; k++){
    if(k%2 == 0){
        document.write("<td style='width: 20px; height: 25px; text-align: center; background-color: #008000; color: white;'>" + k + "</td>");
    } else {
        document.write("<td style='width: 20px; height: 25px; text-align: center; background-color: #FF0000; color: white;'>" + k + "</td>");
    }
}
document.write("</tr> </tbody> </table> <hr> <p style='font-zize: 20px; font-weight: bold;'> 4 - faites une boucle qui affiche 0 à 9 sur la même ligne, répétée sur 10 ligne, dans une table HTML </p> <table style='border-spacing: 0; border-left: 1px black solid; border-top: 1px black solid; margin-left: 50px;'> <tbody>");

for(let l = 0; l<=10; l++){
    document.write("<tr>")
    for(let m = 0; m<=9; m++){
        if(m%2 == 0){
            document.write("<td style='border-right: 1px black solid; border-bottom: 1px black solid; width: 20px; height: 25px; text-align: center; background-color: #FFFF00;'>" + m + "</td>");
        } else {
            document.write("<td style='border-right: 1px black solid; border-bottom: 1px black solid; width: 20px; height: 25px; text-align: center; background-color: #00FFFF;'>" + m + "</td>");
        }
    }
    document.write("</tr>");
}

document.write("</tbody> </table> <hr> <p style='font-zize: 20px; font-weight: bold;'> 5 - pareil en numérotant les cellules de 0 à 99 </p> <table style='border-spacing: 1px; margin-left: 50px;'> <tbody>");

let p = 0;
for(let n = 0; n<10; n++){
    document.write("<tr>")
    for(let o = 0; o<=9; o++){
        if(p%2 == 0){
            document.write("<td style='width: 20px; height: 25px; text-align: center; background-color: #C5979D; color: white;'>" + p + "</td>");
        } else {
            document.write("<td style='width: 20px; height: 25px; text-align: center; background-color: #484D6D; color: white;'>" + p + "</td>");
        }
        p++
    }
    document.write("</tr>");
}
document.write("</tbody> </table> </body>")