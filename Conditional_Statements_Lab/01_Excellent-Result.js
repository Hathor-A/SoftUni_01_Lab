/*
La première tâche de ce sujet est d'écrire une fonction, qui est la partition, 
reçue en tant qu'argument et l'impression "Excellent !", 
ainsi que la partition est de 5,50 ou sur la hauteur.

Créez un nouveau fichier JavaScript dans le dossier et nommez-le de manière appropriée. 
Tous les scripts sont en l'ordre d'être la tâche d'une solution.

Le nouveau fichier peut être ouvert dans la visionneuse.
Allez dans le fichier isExcellent.js et créez la fonction isExcellent(input) :
Envoyez une vérification à l'évaluation. Acota est nu ou égal à 5,50, 
imprimez la sortie en fonction de la condition :
Utilisez la fonction avec différents coûts d'entrée et je commence par Ctrl + F5 :
Numéro Golyamoto
Oui, écrivez une fonction qui reçoit deux objectifs du nombre et de l'empreinte des deux.
Comparez, nous avons donné le deuxième nombre num1 du deuxième nombre num2. 
Imprimez le numéro dans golyam.
*/

function isExcellent(input) {
    let grade = Number(input[0]);
    if (grade >= 5.50) {
        console.log("Excellent!");
    }
}
isExcellent(["6"]);
isExcellent(["5"]);
isExcellent(["5.50"]);
isExcellent(["5.49"]);