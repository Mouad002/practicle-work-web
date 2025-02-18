function degreC(tempF) {
    return (5/9)*(tempF-32);
}


var tempF = prompt('une temperature en fahrenheit:');
console.log("cette temperature equivat a "+degreC(tempF)+" degres celsuis");

