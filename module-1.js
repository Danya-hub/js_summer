// ЗАНЯТИЕ №1

// console.log('Интепретатор');
// console.log('Переводит');
// console.log('в');
// console.log('понятный');
// console.log('язык');
// console.log('машине');
// let sum;
// console.log(typeof sum); //underfined
// sum = 2 + 3;
// console.log(typeof sum); //num
// sum = '2' + 3;
// console.log(typeof sum); //string
// sum = '2' + '3'
// console.log(typeof sum); //boolean
// sum = false;
// console.log(typeof sum);

// взаимодействие с пользователем: alert, prompt, confirm

// alert('Hello World');

// const comment = confirm('Hello World'); 
// console.log(comment);

// const ask = prompt('Enter your name: ');
// console.log(ask);

// основные опреаторы: %,/,*,+,-

// console.log(3 % 2); // 1
// console.log(3 / 2); // 1.5
// console.log(3 * 2); // 6
// console.log(3 + 2); // 5
// console.log(3 - 2); // 1

// console.log(2**3); // 8
// console.log(2**2); // 4
// console.log(2**1); // 2

// операторы сравнения

// console.log(false == 0); // true. "==" - это не строгое равенство. Происходит логическое сравнение 
// console.log(false === 0); // false. "===" - это строгое равенство

// приведение к числу

// console.log(+"5"); // 5
// console.log(+'false'); // NaN
// console.log(+false); // 0
// console.log(Number("5")); // 5
// console.log(Number("false")); // NaN
// console.log(Number("true")); // NaN
// console.log(Number(false)); // 0
// console.log(Number(true)); // 1

// приведение к строке

// console.log(5+""); // 5
// console.log(5+5+""); // 10
// console.log(5+""+5); // 55
// console.log(5+""+5+3); // 553

// приведение на число

// console.log(isNaN(5)); // false
// console.log(isNaN('5')); // false
// console.log(Number.isNaN('Hello World')); // false
// console.log(isNaN('Hello World')); // true
// console.log(isNaN(false)); // false

// сложение с плавающей точкой

// console.log(Math.floor(0.3)); // 0
// console.log(Math.ceil(1.5)); // 2
// console.log(Math.round(1.3)); // 1

// console.log(Math.min(1, 3, 4)); // 1
// console.log(Math.max(1, 3, 4)); // 4

// console.log(Math.random()); // random
// console.log(Math.random(Math.round()); // random
// console.log(Math.random() * (555 - 55)); // random

