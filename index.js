'use strict';

const obj = {
    name: 'Danya',
    age : 16,
    toShowName() {
        console.log(this.name);
    }
}

const total = (a, b, c) => {
    console.log('Сумма:', a + b + c);
};

// Функция высшего порядка и callback-функция 

const mainFunct = (cb, a, b, c) => {
    cb(a, b, c);
};

mainFunct(obj.toShowName.bind(obj));
mainFunct(total, 1, 2, 3);

// Методы конструктора Object

const keys = Object.keys(obj);
const values = Object.values(obj);
const entries = Object.entries(obj);
console.log(keys);
console.log(values);
console.log(entries);

//spread - распыление и rest - збор

//Для массивов

const num = [1, 2, 3, 4, 5];
// const min = Math.min(num);
const min = Math.min(...num);
console.log(min);

const words = ['Html', 'CSS', 'JS', 'React', 'Node.js'];

const newArray = words.slice();
const newArray1 = words.slice(2, 4);

const concatArray = num.concat(words);
const spreadArray = [...num, 1, 2, 3, 'Danya', ...words.slice(2, 4)];

console.log(newArray);
console.log(newArray1);
console.log(concatArray);
console.log(spreadArray);

//Для объектов

const objectAlpha = {
    a: 1,
    x: 3,
    b: 2,
}

const objectBeta = {
    a: 5,
    c: 6,
    b: 10,
}

const newObj = Object.assign({}, objectAlpha, objectBeta);

console.log(newObj);

const newSpreadObj = {
    ...objectAlpha, y: 100, ...objectBeta
}

console.log(newSpreadObj);

const funcSum = function() {
    console.log(arguments);
    //Преобразование псевдомассива в массив

    const newArr = Array.from(arguments);
    console.log(newArr);
}

funcSum(1, 2, 3);
funcSum('5, 6, 7');

//Стрелочние функции не могут собирать аргументы в псевдомассив!!

// const arrayFunc = () => console.log(arguments);
// arrayFunc(1, 2, 3);

const arrayFunc = (...args) => console.log(args);
arrayFunc(1, 2, 3);

const lastNames = [];
const names = [];
const emails = [];
const scores = [];

const toTakeParams = function(lastName, name, email, ...args) {
    console.log(lastName);
    lastNames.push(lastName);
    console.log(name);
    names.push(name);
    console.log(email);
    emails.push(email);
    console.log(args);
    scores.push(...args);
}

toTakeParams('Носулько', 'Данил', '6694524@gmail.com', 1, 2, 3, 4, 5);
toTakeParams('Носулько', 'Данил', '6694524@gmail.com', 1, 2, 3, 4, 5);
toTakeParams('Носулько', 'Данил', '6694524@gmail.com', 1, 2, 3, 4, 5);
toTakeParams('Носулько', 'Данил', '6694524@gmail.com', 1, 2, 3, 4, 5);

console.log(lastNames);
console.log(names);
console.log(emails);
console.log(scores);