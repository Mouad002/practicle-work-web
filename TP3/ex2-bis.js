function hjms(totalSeconds) {
    const days = Math.floor(totalSeconds / (24 * 3600));
    totalSeconds %= 24 * 3600;
    const hours = Math.floor(totalSeconds / 3600);
    totalSeconds %= 3600;
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;

    // Création d'un tableau pour stocker les parties non nulles
    const parts = [];

    if (days > 0) parts.push(`${days} jour${days > 1 ? 's' : ''}`);
    if (hours > 0) parts.push(`${hours} heure${hours > 1 ? 's' : ''}`);
    if (minutes > 0) parts.push(`${minutes} minute${minutes > 1 ? 's' : ''}`);
    if (seconds > 0) parts.push(`${seconds} seconde${seconds > 1 ? 's' : ''}`);

    // Retourne la chaîne formatée ou "0 seconde" si tout est nul
    return parts.length > 0 ? parts.join(' ') : '0 seconde';
}

let seconds = prompt("Une durée en secondes:");
console.log('cette durée équivaut à ' + hjms(seconds))
