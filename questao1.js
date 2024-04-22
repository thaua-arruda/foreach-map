/*
Questão 01 - Crie um array com 5 números e usando o método forEach(), crie 
um algoritmo para  adicionar 1 a cada elemento deste array?
*/

let array = [1, 2, 3, 4, 5];
array.forEach(function(num, indice, arr) {
    arr[indice] = num + 1;
});
console.log(array);