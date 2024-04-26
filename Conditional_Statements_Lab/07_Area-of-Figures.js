/*
Visages sur la figure

Écrivons une fonction qui obtient un regard et mesure la forme géométrique et 
le prism du visage. 
Il en existe quatre types : 
carré, angle droit, cercle et triangle.

À l'entrée, il y a quatre vues de la figure 
(texte avec les caractéristiques suivantes : carré, rectangle, cercle ou triangle).

Qu'est-ce que le carré : 
sur la prochaine édition se trouve un nombre fractionnaire - la longueur du pays

En tant que droitier (rectangle) : 
les deux rouges suivants sont deux fractions du nombre - allez à la page

Comment la figure est un cercle : 
ce qui suit est un nombre fractionnaire - le rayon sur le cercle

Si la figure est un triangle : 
sur les deux suivants, 
trois sont deux fractions du nombre - il devrait être sur la page et il devrait être sur la page.

Le résultat doit être jusqu'à 3 chiffres, la trace est chantée.


function faceRecovery(input) {
    let face = input[0];
    let faceLength = Number(input[1]);
    let faceWidth = Number(input[2]);
    let result = 0;
    if (face === "square") {
        result = faceLength;
    } else if (face === "rectangle") {
        result = faceLength * faceWidth;
    } else if (face === "circle") {
        result = (Math.PI * faceLength) * faceLength;
    } else if (face === "triangle") {
        result = (faceLength * faceWidth) / 2;
        console.log(result);
    }
}
faceRecovery(["square","5"]);
faceRecovery(["rectangle","7","2.5"]);
faceRecovery(["circle","6"]);
faceRecovery(["triangle","4.5","20"]);

*/

function areaFigura(input) {
    let face = input[0];
    let faceLength = Number(input[1]);
    let faceWidth = Number(input[2]);
    let result = 0;
    if (face === "square") {
        result = faceLength;
    } else if (face === "rectangle") {
        result = faceLength * faceWidth;
    } else if (face === "circle") {
        result = (Math.PI * faceLength) * faceLength;
    } else if (face === "triangle") {
        result = (faceLength * faceWidth) / 2;
        console.log(result);
    }
}
areaFigura(["square","5"]);
