### Exercice 1
- the goal of this exercice is to create a function that will reset the content of the inputs.
- we create three inputs two of type text and one button.
```html
<input type="text" id="input1">
<input type="text" id="input2">
<input type="button" onclick="reset()" value="permuter">
```
- we assign an event to the button to reset the inputs, we use `reset()` function
```javascript
function reset() {
    document.getElementById('input1').value = "";
    document.getElementById('input2').value = "";
}
```

### Exercice 2
- the goal of this exercice is to make a very simple calculator.
- we create three inputs, 2 to insert the values and one to show the result.
- we also insert four buttons to perform the basic operations, add, sub, mul, div, and we assign a function for each button.
```html
<table>
    <tr>
        <td>
            <input type="text" id="input1">
        </td>
    </tr>
    <tr>
        <td>
            <input type="text" id="input2">
        </td>
    </tr>
    <tr>
        <td>
            <input type="button" onclick="add()" value="+">
            <input type="button" onclick="sub()" value="-">
            <input type="button" onclick="mul()" value="*">
            <input type="button" onclick="div()" value="/">
        </td>
    </tr>
    <tr>
        <td>
            <input type="text" id="input3">
        </td>
    </tr>
</table>
```
```javascript
var one = document.getElementById('input1');
var two = document.getElementById('input2');
var three = document.getElementById('input3');
function add() {
    three.value = parseFloat(one.value) + parseFloat(two.value);
}

function sub() {
    three.value = parseFloat(one.value) - parseFloat(two.value);
}

function mul() {
    three.value = parseFloat(one.value) * parseFloat(two.value);
}

function div() {
    three.value = parseFloat(one.value) / parseFloat(two.value);
}
```

### Exercice 3
- in this exercice we will create a diagonizer that can tell us the level of obesity from the weight and the height of the person.
- we create the inputs and the buttons
```html
<h1>Caluculateur d'IMC</h1>
<table>
    <tr>
        <td><label>poids (kg):</label></td>
        <td><input type="text" id="poids"></td>
    </tr>
    <tr>
        <td><label>Taille (m):</label></td>
        <td><input type="text" id="taille"></td>
    </tr>
    <tr>
        <td><input id="btn" type="button" value="calculer" onclick="calculer()"></td>
        <td></td>
    </tr>
</table>
<p id="feedback"></p>
```
- then we create javascript code, we will have a function that calulate a rate, and from that rate we can know the level of obesity of the person
```javascript
let poids = document.getElementById('poids');
let taille = document.getElementById('taille');
let p = document.getElementById('feedback');
function calculer() {
    let result = parseFloat(poids.value) / parseFloat(taille.value);
    if(result < 18.5 ) {
        p.innerText = "insuffisance pondre (maigreur)";
    } else if(result >= 18.5 && result < 25) {
        p.innerText = "corpulence normale";
    } else if(result >= 25 && result < 30) {
        p.innerText = "surpoids";
    } else if(result >= 30 && result < 35) {
        p.innerText = "obesite moderee";
    } else if(result >= 35 && result < 40) {
        p.innerText = "obesite severe";
    } else {
        p.innerText = "obesite orbide ou massive";
    }
}
```

### Exercice 4
- not yet