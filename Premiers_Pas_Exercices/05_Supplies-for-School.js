/*
L'année scolaire a déjà commencé et la responsable de la classe 10B

- Annie doit acheter un certain nombre de paquets de produits chimiques, 
des paquets avec des marqueurs, ainsi qu'un nettoyant pour planches. 
C'est une cliente régulière d'une librairie, il y a donc une réduction pour elle, 
qui représente un certain pourcentage du montant total.

Écrivez un programme qui calcule combien d'argent Annie devra collecter pour payer la facture, 
en gardant à l'esprit la liste de prix suivante:

    Paquet de produits chimiques - 5,80 lv. 
    Paquet de marqueurs - 7.20 lv. 
    Préparation - 1,20 BGN (par litre)

À partir de la console, lisez 4 chiffres:

    Nombre d'emballages de produits chimiques - entier dans l'intervalle [0...100]
    Nombre de paquets de marqueurs - entier dans l'intervalle [0...100]
    Litres de nettoyant pour carte - un entier dans l'intervalle [0... 50]
    Pourcentage de diminution - entier dans l'intervalle [0...100]

Imprimez sur la console le montant d'argent dont Annie aura besoin pour payer la facture.

*/


function dollarToPay(input) {
    let numberOfEmballages = Number(input[0]);
    let nettoyPackage = Number(input[1]);
    let numberOfNettoysPerLitre = Number(input[2]);
    let discount = Number(input[3]);
    const chemicalPack = numberOfEmballages * 5.80;
    const marqueurPack = nettoyPackage * 7.20;
    const preparationPack = numberOfNettoysPerLitre * 1.20;
    const moneyCollector = (chemicalPack + marqueurPack + preparationPack ) * (1 - discount / 100);
    console.log(moneyCollector);
}
dollarToPay(["2","3","4","25"]);
dollarToPay(["4","2","5","13"]);