/*
Rumen veut repeindre le salon et a engagé des maîtres à cet effet. 
Écrivez un programme qui calcule le coût de la réparation, en tenant compte des prix suivants :
Nylon de protection - 1,50 BGN par mètre carré
Peinture - 14,50 BGN par litre
Diluant de peinture - 5,00 BGN par litre
Juste au cas où, aux  matériaux nécessaires, 
Rumen veut ajouter 10% de la quantité de peinture et 2 mètres carrés de nylon, 
bien sûr 0,40 leva pour les sacs. 
Le montant payé aux maîtres pour 1 heure de travail est égal à 30% de la somme 
de tous les coûts matériels.

L'entrée est lue depuis la console et contient exactement 4 lignes :
Quantité de nylon requise (en m²) - un entier compris entre [1... 100]
Quantité de peinture requise (en litres) - un entier compris dans l'intervalle [1... 100]
Quantité de diluant (en litres) - un entier compris dans l'intervalle [1... [30]
Les heures pendant lesquelles les maîtres effectueront le travail 
- un entier compris dans l'intervalle [1... 9]

Imprimez  une ligne sur la console :
« {la somme de tous les coûts} »
*/

/*
function repairCost(input) {
    let numberOfNylon = Number(input[0]);
    let numberOfPeinture = Number(input[1]);
    let numberOfDiluant = Number(input[2]);
    let numberOfHours = Number(input[3]);
    let nylonPrice = 1.50;
    let peinturePrice = 14.50;
    let diluantPrice = 5.00;
    let rumenRationalPrice = 10 * peinturePrice / 100;
    let rumenTotalPrice = nylonPrice + 2 * numberOfHours / 100;
    let masterPrice = numberOfHours * 30 / 100 + numberOfNylon + numberOfPeinture + numberOfDiluant + (numberOfHours * 24 / 100) + rumenTotalPrice;
    let nylonCost = numberOfNylon * nylonPrice;
    let peintureCost = numberOfPeinture * peinturePrice;
    let diluantCost = numberOfDiluant * diluantPrice;
    let totalCost = (nylonCost + peintureCost + diluantCost) * (rumenRationalPrice * rumenTotalPrice) + masterPrice * numberOfHours;
    console.log("La Somme de tous les coûts est: " + totalCost);
}
repairCost(["10", "11", "4", "8"]);

*/

function repairCost(input) {
    let numberOfNylon = Number(input[0]);
    let numberOfPeinture = Number(input[1]);
    let numberOfDiluant = Number(input[2]);
    let numberOfHours = Number(input[3]);
    const nylonPrice = (numberOfNylon + 2) * 1.50;
    const peinturePrice = (numberOfPeinture + (numberOfPeinture * 10 / 100)) * 14.50;
    const diluantPrice = numberOfDiluant * 5.00;
    const priceBag = 0.40;
    const totalPriceMaterials = nylonPrice + peinturePrice + diluantPrice + priceBag;
    const masterPrice = (totalPriceMaterials * 30 / 100) * numberOfHours;
    const totalPrice = totalPriceMaterials + masterPrice;
    console.log("La Somme de tous les coûts est: " + totalPrice);
}
repairCost(["10", "11", "4", "8"]);
repairCost(["5", "10", "10", "1"]);