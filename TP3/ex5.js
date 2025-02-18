function estPremier(n) {
    if (n <= 1) return false;
    if (n === 2) return true;
    if (n % 2 === 0) return false;

    for (let i = 3; i <= Math.sqrt(n); i += 2) {
        if (n % i === 0) {
            return i;
        }
    }

    return true;
}

let nombre = parseInt(prompt('Un entier positif :'));
if (estPremier(nombre) === true) {
    console.log('il est un nombre premier');
} else {
    console.log('il n\'est pas un nombre premier, il est divisible par'+ nombre);
}
