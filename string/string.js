// 1 task 
const regex = /a.b/g;
const string = 'ahb acb aeb aeeb adcb axeb';
const matches = string.match(regex);
console.log(matches); // Output: ['ahb', 'acb', 'aeb']

// 2 task 
const regex2 = /^2 \+ 3/;
const string2 = '2 + 3 223 2223';
const match = string2.match(regex2);
console.log(match); // Output: ['2 + 3']


// 3 task 
const currentDate = new Date();
const day = currentDate.getDate();
const month = currentDate.getMonth() + 1; // Month is zero-based, so we add 1 to get the actual month number
const year = currentDate.getFullYear();

console.log('Day:', day);
console.log('Month:', month);
console.log('Year:', year);
