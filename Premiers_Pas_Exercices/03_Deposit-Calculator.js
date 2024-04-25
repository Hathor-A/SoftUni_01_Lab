/*
Écrivez un programme qui calcule le montant que  vous recevrez à la fin de la période de dépôt 
à un certain taux d'intérêt. Utilisez la formule suivante : 
Montant = montant déposé + durée du dépôt * (montant déposé * taux d'intérêt annuel) / 12)

À partir de la console, lisez 3 lignes :
Montant déposé – nombre réel compris entre [100,00 ... 10000.00]
Durée du dépôt (en mois) – un entier compris entre [1... 12]
Taux d'intérêt annuel – nombre réel compris entre [0,00 ... 100.00]

Imprimez le montant sur la console à la fin de la période.

*/

function monthlyInterest(input) {
    let deposit = Number(input[0]);
    let duration = Number(input[1]);
    let interest = Number(input[2]);
    let interestRate = deposit * interest / 100;
    let monthlyInterest = deposit + duration * interestRate / 12;
    console.log(monthlyInterest);
}

monthlyInterest(['200','3','5.7']);
monthlyInterest(['2350', '6', '7']);