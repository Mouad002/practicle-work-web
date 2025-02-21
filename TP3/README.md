# Exercice 1
# Exercice 2
- la fonction `hjms(seconds)`:
```javascript
function hjms(seconds) {
    let days = Math.floor(seconds / (24 * 3600));
    seconds %= 24 * 3600;
    let hours = Math.floor(seconds / 3600);
    seconds %= 3600;
    let minutes = Math.floor(seconds / 60);
    seconds %= 60;

    return days + ' jours ' + hours + ' heures ' + minutes + ' minutes ' + seconds + ' secondes ';
}
```

- Calcule le nombre de jours en divisant par 86 400 (24h × 3600s).
- Met à jour le nombre total de secondes restantes après avoir extrait les jours.
- Calcule le nombre d'heures en divisant par 3600.
- Réduit encore les secondes restantes après avoir extrait les heures.
- Calcule les minutes et enfin les secondes restantes.

# Exercice 2-bis
```javascript
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
    return parts.length > 0 ? parts.join(', ') : '0 seconde';
}
```
### Explication des améliorations :

1. **Suppression des valeurs nulles** : Seules les unités non nulles apparaissent dans le résultat.
2. **Gestion du singulier/pluriel** : Ajoute un "s" uniquement si la valeur est strictement supérieure à 1.
3. **Affichage propre** : Les éléments sont concaténés avec une virgule et un espace.
4. **Gestion du cas `0`** : Affiche "0 seconde" si toutes les valeurs sont nulles.
# Exercice 3
```javascript
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
```
### Explication:
- **Utilisation d'un tableau** : On met les trois nombres dans un tableau `[a, b, c]`.
- **if else** : l'utilisation des comparison pour obtenir `min`, `mid` et `max`.
- **Retourne le tableau trié**.
# Exercice 4
### a) Avec `while()` :
```javascript
function triangle1(taille) {
	let ligne = 1; 
	// Compteur de ligne
	while (ligne <= taille) {
		console.log("*".repeat(ligne)); // Affiche une ligne d'étoiles
		ligne++; // Incrémente le compteur
	}
}
```
**Explication :**
- On initialise `ligne` à 1.
- Tant que `ligne` est inférieur ou égal à la taille, on affiche `ligne` étoiles (`"*".repeat(ligne)`).
- Puis on augmente `ligne` de 1 à chaque itération.
### b) Avec `for` :
```javascript
function triangle2(taille) {
	for (let ligne = 1; ligne <= taille; ligne++) {
		console.log("*".repeat(ligne)); // Affiche une ligne d'étoiles     
	}
}
```
**Explication :**
- La boucle `for` initialise `ligne` à 1 et l'incrémente jusqu'à `taille`.
- À chaque tour, elle affiche une ligne contenant `ligne` étoiles.
# Exercice 4-bis
```javascript
function pyramide(taille) {     
	for (let i = 1; i <= taille; i++) {         
		let espaces = " ".repeat(taille - i); // Ajoute des espaces pour centrer         
		let etoiles = "*".repeat(2 * i - 1);  // Calcule le nombre d'étoiles         
		console.log(espaces + etoiles); // Affiche la ligne avec espaces et étoiles     
	} 
}
```
### **Explication :**

1. **Les espaces** : On ajoute `taille - i` espaces avant les étoiles pour centrer la pyramide.
2. **Les étoiles** : On affiche `2 * i - 1` étoiles pour chaque ligne.
3. **Affichage** : On combine les espaces et les étoiles puis on affiche la ligne.
# Exercice 5
```javascript
function estPremier(n) {
    if (n <= 1) return false; // 0 et 1 ne sont pas premiers
    if (n === 2) return true; // 2 est le seul nombre premier pair
    if (n % 2 === 0) return false; // Tous les autres nombres pairs ne sont pas premiers

    for (let i = 3; i <= Math.sqrt(n); i += 2) {
        if (n % i === 0) {
            return i; // Retourne le premier diviseur trouvé
        }
    }

    return true; // Si aucun diviseur n'est trouvé, n est premier
}
```
### **Explication :**

1. **Gestion des cas spéciaux** :
    - `n <= 1` → Pas premier.
    - `n === 2` → Premier.
    - `n % 2 === 0` (autres nombres pairs) → Pas premier.
2. **Boucle d'optimisation** :
    - On ne teste que les diviseurs impairs (`i += 2`) après `2`.
    - On s'arrête à `Math.sqrt(n)`, car un facteur plus grand aurait déjà été trouvé plus petit.
3. **Affichage personnalisé** :
    - Si le nombre est premier → Affiche `"X est un nombre premier."`
    - Sinon → Affiche `"X n'est pas un nombre premier, il est divisible par Y."`
# Exercice 6

### a) Programme `Fibo1` – Calcul du nième terme de Fibonacci

Nous utilisons une approche **récursive** et une approche **itérative** pour calculer le nième terme de la suite de Fibonacci.
```javascript
function fiboRec(n) {
    if (n === 0) return 0;
    if (n === 1) return 1;
    return fiboRec(n - 1) + fiboRec(n - 2);
}
```
### b) Programme Fibo2 – Trouver le premier terme supérieur à une valeur donnée
Nous utilisons une approche itérative pour parcourir la suite jusqu'à dépasser la valeur donnée par l'utilisateur.
```javascript
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
```
# Exercice 7
```javascript
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
```
### **Explication du code :**

1. **Validation de l'entrée** : On vérifie que `A` est bien compris entre 1 et 100.
2. **Initialisation** : On prend `u0 = A / 2` comme point de départ.
3. **Boucle de calcul** : on applique la formule de récurrence
4. **Affichage du résultat** : On affiche la valeur approximée une fois la condition atteinte.