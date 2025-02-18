function triangle1(taille) {
    let ligne = 1; // Compteur de ligne
    while (ligne <= taille) {
        console.log("*".repeat(ligne)); // Affiche une ligne d'étoiles
        ligne++; // Incrémente le compteur
    }
}

function triangle2(taille) {
    for (let ligne = 1; ligne <= taille; ligne++) {
        console.log("*".repeat(ligne)); // Affiche une ligne d'étoiles
    }
}

let taille = prompt("ecrire la taille de motif : ");
console.log('un motif de taille = '+taille);
triangle1(taille);