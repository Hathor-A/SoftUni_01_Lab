/*
Le restaurant ouvre ses portes et propose plusieurs menus à prix préférentiels : 
Menu poulet –  10.35 lv. 
Menu avec poisson – 12.40 lv. 
Menu végétarien – 8.15 lv. 
Écrivez un programme qui calcule combien il en coûtera à un groupe de personnes pour 
commander des plats à emporter.
Le groupe commandera également un dessert dont le prix est égal à 20% de
l'addition totale (hors livraison). 
Le prix de la livraison est de 2,50 BGN et est finalement facturé.

À partir de la console, lisez 3 lignes :
Nombre de menus de poulet – entier dans l'intervalle [0 ... 99]
Nombre de menus avec poisson – entier compris dans l'intervalle [0 ... [99]
Nombre de menus végétariens – un entier compris entre [0 ... 99]

Imprimez une ligne sur la console : « {prix de la commande} »
*/

function priceGroup(input) {
    let menuPoulet = Number(input[0]);
    let menuPoisson = Number(input[1]);
    let menuVegetarien = Number(input[2]);
    let menuPouletPrice = menuPoulet * 10.35;
    let menuPoissonPrice = menuPoisson * 12.40;
    let menuVegetarienPrice = menuVegetarien * 8.15;
    let totalMenuPrice = menuPoissonPrice + menuVegetarienPrice + menuPouletPrice
    let dessertPrice = totalMenuPrice * 0.20;
    const deliveryPrice = 2.50;
    let totalPrice = menuPouletPrice + menuPoissonPrice + menuVegetarienPrice + dessertPrice + deliveryPrice;
    console.log("prix de la commande: " + totalPrice);
}
priceGroup(["2","4","3"]);
priceGroup(["9","2","6"]);
