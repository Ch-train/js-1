"use strict";

// Обязательное задание.

// Необходимо скопировать и вставить в данный скрипт все функции из 4 задания.
// Необходимо реализовать функцию:
// mathOperation(arg1, arg2, operation);
// Параметры:
// arg1 - первое число.
// arg2 - второе число.
// operation - строка, которая содержит один символ из: "+", "-", "*", "/".
// Функция mathOperation должна вернуть результат операции, который был передан в
// параметр operation для двух первых аргументов (arg1 и arg2).
// Функция mathOperation должна использовать для вычисления функции из 4 задания.

// Примеры вызова функции:
// console.log(mathOperation(5, 3, "+")); // 8
// console.log(mathOperation(5, 3, ":)")); // NaN

// Функции mathOperation всегда передаются корректные числа, проверки на NaN,
// Infinity делать не нужно, однако, в случае если был передан некорректный
// аргумент в параметр operation, необходимо вернуть NaN.

// Необходимо для всех функций прописать комментарии jsdoc https://jsdoc.app/.

const a = +prompt("Введите первое число, отличное от 0");
const b = +prompt("Введите второе число, отличное от 0");
const operation = prompt("Введите одну из операций +, -, *, /");
console.log(`Результат=${mathOperation(a, b, operation)}`);

/**
 * Функция производит выбранную в параметре операцию между двумя числами
 * @param {number} arg1 - 1-е число
 * @param {number} arg2 - 2-е число
 * @param {string} operation - производимая операция (+, -, *, /)
 * @returns {number} результат операции
 */
function mathOperation(arg1, arg2, operation) {
  switch (operation) {
    case "+":
      return add(arg1, arg2);
    case "-":
      return subtract(arg1, arg2);
    case "*":
      return multiply(arg1, arg2);
    case "/":
      return divide(arg1, arg2);
    default:
      return NaN;
  }
}

/**
 * Функция складыавет два числа
 * @param {number} a - 1-е число
 * @param {number} b - 2-е число
 * @returns {number} возвращает сумму двух чисел
 */
function add(a, b) {
  return a + b;
}

/**
 * Функция вычитает из большего числа меньшее
 * @param {number} a - 1-е число
 * @param {number} b - 2-е число
 * @returns {number} возвращает разницу двух чисел
 */
function subtract(a, b) {
  if (a > b) {
    return a - b;
  } else {
    return b - a;
  }
}

/**
 * Функция перемножает два числа
 * @param {number} a - 1-е число
 * @param {number} b - 2-е число
 * @returns {number} возвращает произведение двух чисел
 */
function multiply(a, b) {
  return a * b;
}

/**
 * Функция делит два числа
 * @param {number} a - 1-е число
 * @param {number} b - 2-е число
 * @returns {number} возвращает результат деления 1-го числа на 2-ое
 */
function divide(a, b) {
  return a / b;
}