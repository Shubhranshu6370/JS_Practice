//Check the all numbers from array which is multiple  of 10

let number = [10, 20, 40, 50, 60];

let answer = number.every((el) => el % 10 == 0);

console.log(answer);

//OUTPUT :- True