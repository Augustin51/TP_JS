let sapin = prompt("Choisisez le nombre d'étage du sapin");
while(isNaN(sapin)){
    sapin = prompt("Merci de choisir le nombre d'étage du sapin");
}

let etage = "*";
    branche = "*";
    i = 1;
    j = 1;
    k = 4;
    l = 1;
    
while(i<=sapin){
    etage = branche
    while(j<=k){
        document.write(etage + "<br>");
        etage+= "**";
        j++;
    }
    branche+="**";
    j = 1;
    k++
    i++;
}
while(l<=sapin){
    document.write("| <br>")
    l++
}