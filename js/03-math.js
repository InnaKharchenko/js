const numbers = [1, 5, 8, 9, 12, 4, 27, 30, 18, 14];
let total = 0;

// for (const number of numbers) {
//     if (number % 2 === 0) {
//         console.log(`${number} парне!!!`);
//         total += number;
//     }
// }
for (const number of numbers) {
    if (number % 2 !== 0) {
        console.log('This itteration should continue', number);
        continue;
    }

    console.log(`${number} - парне!!!`);
    total += number;
}
console.log('Total: ', total);