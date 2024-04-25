/*
Pour son anniversaire, Lioubomir a reçu un aquarium en forme de parallélépipède.
Dans un premier temps, nous lisons sur la console sur des rangées séparées ses dimensions
– longueur, largeur et hauteur en centimètres.
Il convient de calculer combien de litres d'eau l'aquarium collectera,
si l'on sait qu'un certain pourcentage de sa capacité est occupé par le sable,
les plantes, le chauffage et la pompe. 
Un litre d'eau est égal à un décimètre cube / 1l = 1 dm3 /. 
Écrivez un programme qui calcule les litres d'eau nécessaires pour remplir l'aquarium.

À partir de la console, lisez 4 lignes :
Longueur en cm – un entier compris entre [10 ... 500]
Largeur en cm – un entier compris entre [10 ... 300]
Hauteur en cm – un entier compris entre [10... 200]
Pourcentage – nombre réel compris entre [0,000 ... 100.000]

Imprimez un numéro sur la console :
les litres d'eau que l'aquarium va recueillir.
*/

function aquariumWater(input) {
    let length = Number(input[0]);
    let width = Number(input[1]);
    let height = Number(input[2]);
    let percentage = Number(input[3]) / 100;
    let volume = length * width * height;
    let volumeLitre = volume / 1000;
    let spaceVolume = percentage;
    let litreRequired = volumeLitre * (1 - spaceVolume);
    console.log("Les litres d'eau que l'aquarium va recueillir: " + litreRequired);
}
aquariumWater(["85","75","47","17"]);
aquariumWater(["105","77","89","18.5"]);