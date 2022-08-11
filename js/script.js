//Напишіть програму, яка отримає від користувача
//число (кількість хвилин) і виведе у консоль
//Рядок у форматі годин і хвилин
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/padStart
// 70 === 01:10

// const time = Number(promt("Введіть кількість хвилин"));


// let hours = time / 60;
// hours = Math.floor(hours);
// hours = String(hours).padStart(2, 0);

// let minutes = time % 60;
// minutes = String(minutes).padStart(2, 0);

// console.log(`${hours}:${minutes}`);

//Використовуючи функцію if...else,
//напишіть код, який запитуватиме:
//"Яка офіційна назва JavaScript?"
//Якщо користувач вводить "ECMAScript",
// показати через alert: "Вірно!"
//інакше відобразити:"Не знаєте? ECMAScript!"

//const userInputInLowerCase = prompt("Яка офіційна назва JavaScript?");

//console.log(userInputInLowerCase);
//const officialName = "ECMAScript".toLowerCase();
// if (userInput === officialName) {
//   alert("Вірно!");
// } else {
//   alert("Не знаєте? ECMAScript!");
// }

// let message = "Не знаєте? ECMAScript!"
// message = userInputInLowerCase === officialName ? "Вірно!" : message;
//   alert(message);

//Даний рядок, що складається із символів, наприклад, 'abcde'.
// Перевірте, що першим символом цього рядка є буква 'a'.
// Якщо це так - виведіть 'так', інакше виведіть 'ні'.

// const string = 'abcde';
// const firstLetter = string[0];
// const message = firstLetter === 'a' ? 'так' : 'ні';
// console.log(message);

// const string = 'abcde';
// console.log(string.startsWith('a'));
// const message = string.startsWith('a') ? 'так' : 'ні';
// console.log(message);

// У змінній min лежить число від 0 до 59.
// Визначте, в яку чверть години потрапляє
// це число(у першу, другу, третю чи четверту).

// const min = 10;

// if (min > 0 && min <= 14) {
//   console.log("Перша четверть")
// } else if (min >= 15 && min <= 29) {
//   console.log("Друга четверть")
// } else if (min >= 30 && min <= 44) {
//   console.log("Третя четверть")
// } else if (min >= 45 && min <= 60) {
//   console.log("Четверта четверть")
// } else {

// }

// // завдання 11/2 розібрати
//   function calculateEngravingPrice(message, pricePerWord) {
//    // Change code below this line
//     let messageSpliter = message.split(" ");
//     let messageLength = messageSpliter.length;
//     let totalPrice = messageLength * pricePerWord;
//     return totalPrice;
//    // Change code above this line
// }

// function findLongestWord(string) {
//   // Change code below this line
//   let words = string.slpit(" ");
//   let longWord = words[0];
//   for (const word of words) {
//     if (word.length > longWord.length) {
//       longWord = words;
//     }
//   }
//   return longWord;

//   // Change code above this line
// }

// length

var arr = [];
var arr1 = [];
var arr2 = [];
arr[ 0 ] = 1;
arr1[ 5 ] = 1;
arr2[ 4294967295 ] = 1;
console.log( arr.length, arr1.length, arr2.length );