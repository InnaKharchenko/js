
// for....in  краще не використовувати 
const feedback = {
    good: 5,
    neutral: 10,
    bad: 3,
};
let totalFeedback = 0;
const keys = Object.keys(feedback);

console.log(keys);

for (const key of keys) {
    console.log(key);
    console.log(feedback[key]);

    totalFeedback += feedback[key];
}

console.log('Total: ', totalFeedback);