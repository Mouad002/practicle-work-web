// question a

function fiboRec(n) {
    if (n === 0) return 0;
    if (n === 1) return 1;
    return fiboRec(n - 1) + fiboRec(n - 2);
}

let n = parseInt(prompt("Entrez la valeur de n :"));
console.log('Le '+n+'eme terme de Fibonacci est : '+fiboRec(n));

// question b

function premierFiboSuperieur(valeur) {
    let a = 0, b = 1, rang = 1;

    while (b <= valeur) {
        let temp = a + b;
        a = b;
        b = temp;
        rang++;
    }

    console.log('Le premier terme de Fibonacci supérieur à '+valeur+' est '+valeur+', de rang ' +rang+'.');
}

let nombre = parseInt(prompt("Entrez une valeur seuil :"));
premierFiboSuperieur(nombre);
