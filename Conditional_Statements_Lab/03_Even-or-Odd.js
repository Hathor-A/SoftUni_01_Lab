/*
Paire ou impair
Oui, écrivez une fonction qui a reçu un nombre entier comme argument 
et une impression sur la consolation, qui lui a donné pair ou impair. 
Si vous tapez même "même" ou même "improprié".

La première fois que vous ajoutez un nouveau fichier JavaScript à votre projet
Vérifiez, donnez le nombre égal, divisez-le par 2 et vérifiez, 
donnez le reste de la division. Imprimez la sortie en fonction de la condition 
- le texte "égalé" ou " impair".
*/

function oddOrEven(input) {
    let number = Number(input[0]);
    if (number % 2 === 0) {
        console.log("even");
    } else {
        console.log("odd");
    }
}
oddOrEven(["2"]);
oddOrEven(["3"]);
oddOrEven(["25"]);
oddOrEven(["1024"]);