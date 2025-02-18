function troisNombres(a, b, c) {
    let min, mid, max;

    // Trouver le plus petit
    if (a <= b && a <= c) {
        min = a;
        if (b <= c) {
            mid = b;
            max = c;
        } else {
            mid = c;
            max = b;
        }
    } else if (b <= a && b <= c) {
        min = b;
        if (a <= c) {
            mid = a;
            max = c;
        } else {
            mid = c;
            max = a;
        }
    } else {
        min = c;
        if (a <= b) {
            mid = a;
            max = b;
        } else {
            mid = b;
            max = a;
        }
    }

    return [min, mid, max];
}

let n1 = parseInt(prompt('1er nombre: '));
let n2 = parseInt(prompt('2eme nombre: '));
let n3 = parseInt(prompt('3eme nombre :'));

console.log('les nombres dans l\'ordre croissant :' + troisNombres(n1,n2,n3).join(' '))
