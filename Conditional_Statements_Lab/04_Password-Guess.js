/*
Connaître le mot de passe
Oui, écrivez la fonction qui a reçu le mot de passe (texte) et 
vérifiez le mot de passe donné avec la phrase "s3cr3t ! P@ssw0rd". 
Si vous venez, vous obtiendrez "Bienvenue". Si vous n'avez pas de « mauvais mot de passe ! »

Exemple d'entrée et de sortie
*/

function password(input) {
    let password = input[0];
    if (password === "s3cr3t ! P@ssw0rd") {
        console.log("Welcome");
    } else {
        console.log("Wrong password!");
    }
}
password(["qwerty"]);
password(["s3cr3t ! P@ssw0rd"]);
password(["s3cr3t!p@ss"]);
