/*
Questão 04 – Crie um algoritmo usando o método forEach() para encontrar a 
soma de todos os números em um array?
*/

var numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var total = 0;

numeros.forEach(function(item){
    total += item
});
console.log(total);