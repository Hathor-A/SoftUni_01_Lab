/*
Pour les vacances d'été, il y a un certain nombre de livres sur la liste de littérature obligatoire de Joro. 
Comme Joro préfère jouer avec des amis à l'extérieur, 
votre tâche est de l'aider à calculer le nombre d' heures par jour qu'il doit consacrer à la lecture 
de la littérature nécessaire.

À partir de la console, lisez 3 lignes :
Nombre de pages dans le livre en cours – un entier compris dans l'intervalle [1... 1000]
Pages qui se lisent en 1 heure – un entier compris dans l'intervalle [1... 1000]
Le nombre de jours dont vous avez besoin pour lire le livre – un entier compris dans l'intervalle [1... 1000]


Imprimez sur la console le nombre d'heures que Joro doit passer à lire chaque jour.
*/

function timeToRead(input) {
    let numberOfPages = Number(input[0]);
    let numberOfPagesRead = Number(input[1]);
    let numberOfDays = Number(input[2]);
    let numberOfDaysRead = numberOfPages / numberOfPagesRead;
    let timeToRead = numberOfDaysRead / numberOfDays;
    console.log(timeToRead);
}

timeToRead(["212", "20", "2"]);
timeToRead(["432", "15", "4"]);
