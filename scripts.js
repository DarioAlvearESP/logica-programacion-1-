const prompt = require('prompt-sync')();

let num1 = parseFloat(prompt("ingrese el primer número:"));
let num2 = parseFloat(prompt("ingrese el segundo número:"));
let num3 = parseFloat(prompt("ingrese el tercero número:"));

let mayor = Math.max(num1, num2, num3)
let menor = Math.min(num1, num2, num3)
let medio = num1 + num2 + num3 - mayor - menor;


console.log("orden mayor a menor: " + mayor + "," +  medio + "," + menor);

console.log("orden menor a mayor: " + menor + "," + medio  + "," + mayor);
if(num1 == num2 && num2 == num3){
        console.log("Los números son inguales:")
}else if (num1 == num2 || num2 == num3 || num1 == num3){
    console.log("Hay dos numeros iguales:")
}else {
    console.log("Los tres numeros son diferentes:")
}