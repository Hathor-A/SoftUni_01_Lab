/*
Écrivez une fonction pour convertir les dollars américains (USD) en leva bulgare (BGN). 
Utilisez un taux fixe  entre le dollar et le lev : 1 USD = 1,79549 BGN.
Créez la variable usd, qui prend en entrée de la console un nombre sous la forme d'une chaîne 
et le convertit en type numérique.
Calculer la conversion des dollars américains en levs bulgares. 
Imprimez la sortie de la console.

*/

function convertor(input) {
    let usd = Number(input[0]);
    let bgn = usd * 1.79549;
    console.log(bgn);
}

convertor(["100"]);
convertor(["22"]);
convertor(["12.5"]);