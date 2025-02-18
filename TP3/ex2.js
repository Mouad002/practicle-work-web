function hjms(seconds) {
    let days = Math.floor(seconds / (24 * 3600));
    seconds %= 24 * 3600;
    let hours = Math.floor(seconds / 3600);
    seconds %= 3600;
    let minutes = Math.floor(seconds / 60);
    seconds %= 60;

    return days + ' jours ' + hours + ' heures ' + minutes + ' minutes ' + seconds + ' secondes ';
}

let seconds = prompt("Une durée en secondes:");
console.log('cette durée équivaut à ' + hjms(seconds))