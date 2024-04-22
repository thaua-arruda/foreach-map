/*
Questão 02 - Crie um algoritmo usando o método map() para converter um 
array de strings para um array de números?
*/

let freeFire = ["1", "2", "3", "4", "5"];
let transforma = freeFire.map(function(num){
   return parseInt(num);
})
console.log(transforma);

