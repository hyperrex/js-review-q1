/**
 * @name: add
 * @description returns the result of both parameters
 * @param1: num1
 * @param2: num2
 * @return: number
 **/
function add(num1, num2) {
  return num1 + num2;
}

/**
 * @name: subtract
 * @description returns the difference between both parameters
 * @param1: num1
 * @param2: num2
 * @return: number
 **/
function subtract(num1, num2) {
  return num1 - num2;
}

/**
 * @name: calculateSum
 * @description returns the sum of every number in the array
 * @param1: num1
 * @param2: num2
 * @return: number
 **/
function calculateSum(array) {
  return array.reduce((acc, num) => acc += num, 0);
}

//don't look up the answer!
function map(arr, callback){
  let output = [];
  arr.forEach((el) => {
    output.push(callback(el));
  });
  return output;
}
//map([1,2,3],3)  => [3,6,9]
//map([2,3,4],-2) => [-4,-6,-8]

/**
 * @name: filter
 * @description returns a new array containing only truthy elements
 * @param1: collection
 * @return: array
 **/
function filter() {

}

/**
 * @name: reverseLettersInPlace
 * @description returns every word in a string reversed, but in it's original place
 * @param1: string
 * @return: string
 **/
function reverseLettersInPlace(str) {
  split = str.split(' ');
  split.map((word) => {
    return word.split('').reverse().join('');
  });
  return split.join(' ');
}
//reverseLettersInPlace("Hi justin") => "iH nitsuj"
//reverseLettersInPlace(" A simple challenge! ") => => " A elpmis !egnellahc "

/**
 * @name: allSimpleCombinations
 * @description returns an array containing every single combination of adjacent letters in the input string
 * @param1: string
 * @return: array
 **/
function allSimpleCombinations() {

}
//allSimpleCombinations('cat')  => ['c','ca','cat','a','at','t']
//allSimpleCombinations('talk') => ['t','ta','tal','talk','a','al','alk','l','lk','k'];

/**
 * @name: alphabeticalOrder
 * @description returns every letters in a word in alphabetical order
 * @param1: string
 * @return: string
 **/
function alphabeticalOrder() {

}
//allSimpleCombinations('talk') => 'aklt'
//allSimpleCombinations('sailormoon')  => 'ailmnooors'

/**
 * @name: returnLongestWord
 * @description returns the longest word in a string
 * @param1: string
 * @return: string
 **/
function returnLongestWord() {

}
//returnLongestWord('short sentence alphabetical') => 'alphabetical'
//returnLongestWord('cute pretty beautiful pulchritudinous') => 'pulchritudinous'

/**
 * @name: isPrime
 * @description returns true if number is prime; false if not
 * @param1: number
 * @return: boolean
 **/
function isPrime() {

}
//isPrime(7)  => true
//isPrime(12) => false

/**
 * @name: returnCoinBreakdown
 * @description returns an object whose key:value pairs approximates the input number in United States coins.
 * @param1: number
 * @return: object
 **/
function returnCoinBreakdown() {

}
//returnCoinBreakdown(46) => {25:1,10:1,5:2,1:1}
//returnCoinBreakdown(19) => {25:0,10:1,5:1,1:4}

/**
 * @name: countVowels
 * @description returns the number of vowels in a string
 * @param1: string
 * @return: number
 **/
function countVowels() {

}
//countVowels('apple')  => 2
//countVowels('tomato') => 3

/** BONUS
 * @name: forEach
 * @description iterates through an array or object and executes function on each element
 * @param1: collection
 * @param2: function
 * @return: N/A
 **/
function forEach(collection, callback) {
  if (typeof collection === 'object' && collection !== null) {
    for (let key in collection) {
      callback(collection[key]);
    }
  } else {
    for (let i = 0; i < collection.length; i++) {
      callback(collection[i]);
    }
  }
}

module.exports = {
  add: add,
  subtract: subtract,
  calculateSum: calculateSum,
  map: map,
  filter: filter,
  reverseLettersInPlace: reverseLettersInPlace,
  allSimpleCombinations: allSimpleCombinations,
  alphabeticalOrder: alphabeticalOrder,
  returnLongestWord: returnLongestWord,
  isPrime: isPrime,
  returnCoinBreakdown: returnCoinBreakdown,
  countVowels: countVowels,
  forEach: forEach
};
