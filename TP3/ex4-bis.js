function pyramide(taille) {
    for (let i = 1; i <= taille; i++) {
        let espaces = " ".repeat(taille - i); // Ajoute des espaces pour centrer
        let etoiles = "*".repeat(2 * i - 1);  // Calcule le nombre d'étoiles
        console.log(espaces + etoiles); // Affiche la ligne avec espaces et étoiles
    }
}

// Exemple d'utilisation :
let taille = parseInt(prompt("Donnez la taille du motif :"), 10);
pyramide(taille);
