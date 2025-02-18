function Raca1(A) {
    if (A < 1 || A > 100) {
        console.log("Veuillez entrer un nombre A compris entre 1 et 100.");
        return;
    }

    let u = A / 2; // Initialisation de u0
    let epsilon = 1e-5; // Précision demandée

    while (Math.abs(u * u - A) >= epsilon) {
        u = 0.5 * (u + A / u); // Formule de récurrence
    }

    console.log(`Pour un nombre A entre 1 et 100: ${A}`);
    console.log(`Valeur approchée de la racine carrée = ${u}`);
}

// Exemple d'utilisation
let A = parseFloat(prompt("Entrez un nombre A entre 1 et 100 :"));
Raca1(A);

let nombre = parseInt(prompt('Entrez un nombre A entre 1 et 100 :'));
console.log('Valeur approchée de la racine carrée = '+Raca1(nombre));
