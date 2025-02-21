// Funções Matemáticas (Math)

//Math.sqrt // Math.pow

//Raiz quadrada de 25
console.log(Math.sqrt(25));  //5

// Potência de um nº
console.log(Math.pow(3,2)); //3 elevado a 2 = 9 
console.log(Math.pow(4,3)); //4 elevado ao cubo = 64
console.log(Math.pow(27,1/3)); //27^(1/3)=3 - Raiz cúbica

//Funções arredondamento usando Math
// round - sempre para o número mais próximo
console.log(Math.round(4.3)); //4
console.log(Math.round(4.7)); //5
// floor - sempre para baixo
console.log(Math.floor(4.9)); //4 
// ceil - sempre para cima
console.log(Math.ceil(4.1)); //5

//Math.random - número aleatórios
console.log(Math.random()); // 0 -> 1
//0 -> 100
console.log(Math.round(Math.random()*100));
//0 -> 99
console.log(Math.floor(Math.random()*100));
//1 -> 100
console.log(Math.ceil(Math.random()*100))

//30 -> 40
console.log(Math.round(Math.random()*10+30));
//50 -> 100
console.log(Math.round(Math.random()*50+50));

//Math.abs (absolute) - tranforma número negativos em positivos
console.log(Math.abs(-10)); //10
//Math.min - retorna o menor número da lista
console.log(Math.min(1,2,3,4,5,6)); //1
//Math.max
console.log(Math.max(1,2,3,4,5,6)); //6