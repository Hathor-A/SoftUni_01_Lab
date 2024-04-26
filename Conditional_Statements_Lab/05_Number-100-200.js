/*
Nombre de 100 à 200
Écrivons une fonction qui obtient le nombre entier et vérifions la donnée sous 100, 
entre 100 et 200 ou plus de 200. Quel est le numéro :
Moins de 100 ans, imprimez : "Moins de 100"

Entre 100 et 200, imprimez : "Entre 100 et 200"
Plus de 200 impressions : "Plus de 200"
*/

function numberFound(input) {
    let number = Number(input[0]);
    if (number < 100) {
        console.log("Less than 100");
    } else if (number >= 100 && number <= 200) {
        console.log("Between 100 and 200");
    } else {
        console.log("Greater than 200");
    }
}
numberFound(["95"]);
numberFound(["120"]);
numberFound(["210"]);
