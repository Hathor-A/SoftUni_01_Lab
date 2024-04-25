/*
Écrivez un programme qui lit un angle en radians  (nombre décimal) 
et le convertit en degrés. 
Utilisez la formule : degré = radian * 180 / π. 
Le nombre π dans les programmes Java est disponible via Math.PI.

Acceptez les données d'entrée (radians) et convertissez-les en un type numérique :
Créez une nouvelle variable dans laquelle vous allez convertir les radians en degrés, 
en connaissant la formule de calcul :
Imprimez les degrés obtenus :

*/


function radiansToDegrees(input) {
    let radians = Number(input[0]);
    let degrees = radians * 180 / Math.PI;
    console.log(degrees);
}
radiansToDegrees(["3.1416"])
radiansToDegrees(["6.2832"])