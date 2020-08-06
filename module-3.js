'use strict';

// console.log('Задание 1');

// const user = {
//     name: 'Mango',
//     age: 20,
//     hobby: 'html',
//     premium: true,
// };

// user.mood = 'happy';
// user['hobby'] = 'skydiving';
// user.premium = false;
// console.table(user);

// console.log('Задание 2');
// const countProps = function (obj) {
//     return Object.entries(obj).length;
// };

// console.log(countProps({})); // 0

// console.log(countProps({
//     name: 'Mango',
//     age: 2
// })); // 2

// console.log(countProps({
//     mail: 'poly@mail.com',
//     isOnline: true,
//     score: 500
// })); // 3

// console.log('Задание 3');
// const findBestEmployee = function (employees) {
//     //                                         [ 0,   1,     2,      3]
//     const keys = Object.keys(employees); //     [ann, david, helen, lorence]
//     const values = Object.values(employees); // [29,   35,     1,    99]
//     let name = keys[0]; // ann
//     let score = values[0]; // 29
//     for (let i = 1; i < keys.length; i++) {
//         // david  & 35
//         if (values[i] > score) {
//             // 1: 35 > 29 -> true
//             // 2: 1 > 35 -> false
//             // 3: 00 > 36 -> true
//             score = values[i]; // 1: 35   3: 99
//             name = keys[i]; // 1: david   3: lorence
//         }
//     }

//     return name;
// };

// console.log(
//     findBestEmployee({
//         ann: 29,
//         david: 35,
//         helen: 1,
//         lorence: 99,
//     }),
// ); // lorence

// console.log(
//     findBestEmployee({
//         poly: 12,
//         mango: 17,
//         ajax: 4,
//     }),
// ); // mango

// console.log(
//     findBestEmployee({
//         lux: 147,
//         david: 21,
//         kiwi: 19,
//         chelsy: 38,
//     }),
// ); // lux

// console.log('Задание 4');
// const countTotalSalary = function (employees) {
//     const values = Object.values(employees);
//     let total = 0;
//     for (const elem of values) {
//         total += elem;
//     }
//     return total;
// };

// console.log(countTotalSalary({})); // 0

// console.log(
//     countTotalSalary({
//         mango: 100,
//         poly: 150,
//         alfred: 80,
//     }),
// ); // 330

// console.log(
//     countTotalSalary({
//         kiwi: 200,
//         lux: 50,
//         chelsy: 150,
//     }),
// ); // 400

// console.log('Задание 5');
// const products = [{
//         name: 'Радар',
//         price: 1300,
//         quantity: 4
//     },
//     {
//         name: 'Сканер',
//         price: 2700,
//         quantity: 3
//     },
//     {
//         name: 'Дроид',
//         price: 400,
//         quantity: 7
//     },
//     {
//         name: 'Захват',
//         price: 1200,
//         quantity: 2
//     },
// ];

// const getAllPropValues = function (arr, prop) {
//     const values = [];
//     for (const obj of arr) {
//         for (const key in obj) {
//             // console.log(key);
//             // console.log(obj[key]);
//             if (key === prop) {
//                 values.push(obj[key]);
//             }
//         }
//     }
//     return values;
// };

// console.log(getAllPropValues(products, 'name')); // ['Радар', 'Сканер', 'Дроид', 'Захват']

// console.log(getAllPropValues(products, 'quantity')); // [4, 3, 7, 2]

// console.log(getAllPropValues(products, 'category')); // []

console.log('Задание 6');
const products = [{
        name: 'Радар',
        price: 1300,
        quantity: 4
    },
    {
        name: 'Сканер',
        price: 2700,
        quantity: 3
    },
    {
        name: 'Дроид',
        price: 400,
        quantity: 7
    },
    {
        name: 'Захват',
        price: 1200,
        quantity: 2
    },
];

const calculateTotalPrice = function (allProdcuts, productName) {
    let sum = 0;
    for (const obj of allProdcuts) {
        const values = Object.values(obj);
        for (let i = 0; i < values.length; i++) {
            if (values[i] === productName) {
                sum = values[Number(i + 1)] * values[Number(i + 2)];
            }
        }
    }
    return sum;
};

console.log(calculateTotalPrice(products, 'Радар')); // 5200

console.log(calculateTotalPrice(products, 'Дроид')); // 2800

console.log('Задание 7');
