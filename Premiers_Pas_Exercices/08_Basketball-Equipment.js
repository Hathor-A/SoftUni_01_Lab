/*
Jesse décide qu'il veut jouer au basketball, mais il a besoin d'équipement pour s'entraîner. 
Écrivez un programme qui calcule les coûts que Jesse aura s'il commence à s'entraîner, 
en sachant combien s'élèvent les frais d'entraînement au basket-ball pour une période de 1 an. 
Baskets de basket-ball – leur prix est inférieur de 40 % à celui des frais pendant un an
Équipe de basket-ball – son prix est 20% moins cher que celui des baskets
Basket-ball – son prix est de 1/4 du prix de l'équipe de basket-ball
Accessoires de basket-ball – leur prix est de 1/5 du prix du ballon de basket-ball

À partir de la console, lisez 1 ligne :
Les frais annuels d'entraînement de basket-ball – un entier compris entre [0... 9999]

Imprimez sur la console combien Jesse dépensera s'il commence à jouer au basket-ball.
*/

function trainingCost(input) {
    let annualTrainingCost = Number(input[0]);
    let basketPrice = annualTrainingCost - (annualTrainingCost * 40 / 100);
    let teamPrice = basketPrice - (basketPrice * 20 / 100);
    let ballPrice = (teamPrice / 4);
    let accessoriesPrice = (ballPrice / 5);
    let totalCost = annualTrainingCost + basketPrice + teamPrice + ballPrice + accessoriesPrice;
    console.log(totalCost);
}
trainingCost(["365"]);
trainingCost(["550"]);