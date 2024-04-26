/*
Numéro Golyamoto
Oui, écrivez une fonction qui reçoit deux objectifs du nombre et de l'empreinte des deux.
Comparez, nous avons donné le deuxième nombre num1 du deuxième nombre num2. 
Imprimez le numéro dans golyam.

*/
function golyam(input) {
    let num1 = Number(input[0]);
    let num2 = Number(input[1]);
    if (num1 > num2) {
        console.log(num1);
    } else {
        console.log(num2);
    }
}
golyam(["5","3"]);
golyam(["3","5"]);
golyam(["10","10"]);
golyam(["-5","5"]);

