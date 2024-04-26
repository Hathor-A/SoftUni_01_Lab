/*
Informations sur la vitesse
Oui, écrivez une fonction qui reçoit la vitesse (nombre réel) 
et imprimez les informations pour la vitesse.

À des vitesses allant jusqu'à 10 (inclusives), tapez "slow"
À des vitesses supérieures à 10 et jusqu'à 50 (inclusives), tapez "moyenne"
À des vitesses supérieures à 50 et jusqu'à 150 (inclus), tapez "rapide"
À des vitesses supérieures à 150 et jusqu'à 1000 (inclusives), imprimez "ultra rapide"

Lorsque la vitesse est suspendue, tapez "extrêmement rapide"
*/

function speedInfo(input) {
    let speed = Number(input[0]);
    if (speed <= 10) {
        console.log("slow");
    } else if (speed > 10 && speed <= 50) {
        console.log("average");
    } else if (speed > 50 && speed <= 150) {
        console.log("fast");
    } else if (speed > 150 && speed <= 1000) {
        console.log("ultra fast");
    } else {
        console.log("extremely fast");
    }
}
speedInfo(["8"]);
speedInfo(["49.5"]);
speedInfo(["126"]);
speedInfo(["160"]);
speedInfo(["3500"]);