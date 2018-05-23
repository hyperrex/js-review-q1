const allFunctions = require('../index');
const assert = require('chai').assert;

describe('all tests for your functions', () => {
  // add
  describe('add tests', () => {
    const add = allFunctions.add;
    it('should be a function', function() {
      assert.isFunction(add);
    });
    it('should output a number', () => {
      assert.isNumber(add(5, 5));
    });
    it('should add positive numbers', () => {
      assert.equal(add(1, 3), 4);
      assert.equal(add(8, 2), 10);
    });
    it('should add negative numbers', () => {
      assert.equal(add(-1, -3), -4);
      assert.equal(add(-10, -3), -13);
    });
  });

  // subtract
  describe('subtract tests', () => {
    const sub = allFunctions.subtract;
    it('should be a function', function() {
      assert.isFunction(sub);
    });
    it('should output a number', () => {
      assert.isNumber(sub(8, 1));
    });
    it('should subtract positive numbers', () => {
      assert.equal(sub(1, 3), -2);
      assert.equal(sub(100, 87), 13);
    });
    it('should subtract negative numbers', () => {
      assert.equal(sub(-1, -3), 2);
      assert.equal(sub(-39, -11), -28);
    });
  });

  // calculateSum
  describe('calculateSum tests', () => {
    const sum = allFunctions.calculateSum;
    it('should be a function', function() {
      assert.isFunction(sum);
    });
    it('should output a number', () => {
      assert.isNumber(sum([1, 2, 3]), 3);
    });
    it('should sum positive array', () => {
      assert.equal(sum([1, 3, 5]), 9);
      assert.equal(sum([10, 7]), 17);
    });
    it('should sum negative array', () => {
      assert.equal(sum([-6, -3]), -9);
      assert.equal(sum([-9, 11]), 2);
    });
  });

  // map
  describe('map tests', () => {
    const map = allFunctions.map;
    it('should be a function', function() {
      assert.isFunction(map);
    });
    it('should output an array', () => {
      const double = function(num) {
        return num * 2;
      };
      assert.isArray(map([1, 2, 3], double), [2, 4, 6]);
    });
    it('should not mutate the original array', () => {
      const array = [1, 2, 3];
      const double = function(num) {
        return num * 2;
      };
      assert.notDeepEqual(map(array, double), array);
    });
    it('should return a new array with every element doubled', () => {
      const double = function(num) {
        return num * 2;
      };
      assert.deepEqual(map([1, 2, 3], double), [2, 4, 6]);
    });
    it('should return a new array with every multipled by ten', () => {
      const timesTen = function(num) {
        return num * 10;
      };
      assert.deepEqual(map([1, 21, 3, 42], timesTen), [10, 210, 30, 420]);
    });
    it('should return a new array with every word capitalized', () => {
      const nowCapitalized = function(word) {
        return word[0].toUpperCase() + word.slice(1);
      };
      assert.deepEqual(
        map(['every', 'day', 'is', 'like', 'sunday'], nowCapitalized),
        ['Every', 'Day', 'Is', 'Like', 'Sunday']
      );
    });
  });

  // filter
  describe('filter tests', () => {
    const filter = allFunctions.filter;
    it('should be a function', function() {
      assert.isFunction(filter);
    });
    it('should output an array', () => {
      const isOdd = function(num) {
        return num % 2 !== 0;
      };
      assert.isArray(filter([1, 2, 3], isOdd));
    });
    it('should not mutate the original array', () => {
      const array = [1, 2, 3];
      const isOdd = function(num) {
        return num % 2 !== 0;
      };
      assert.notDeepEqual(filter(array, isOdd), array);
    });
    it('should return only odd numbers', () => {
      const isOdd = function(num) {
        return num % 2 !== 0;
      };
      assert.deepEqual(filter([1, 2, 3], isOdd), [1, 3]);
    });
    it('should return only words longer than 4 letters', () => {
      const longWords = function(word) {
        return word.length > 4;
      };
      assert.deepEqual(
        filter(['apple', 'pear', 'banana', 'guava'], longWords),
        ['apple', 'banana', 'guava']
      );
    });
  });

  // reverseLettersInPlace
  describe('reverseLettersInPlace tests', () => {
    const reverseLettersInPlace = allFunctions.reverseLettersInPlace;
    it('should be a function', function() {
      assert.isFunction(reverseLettersInPlace);
    });
    it('should output a string', () => {
      assert.isString(reverseLettersInPlace('Hello world'));
    });
    it('should reverse letters while keeping words in place', () => {
      assert.equal(reverseLettersInPlace('Hello World'), 'olleH dlroW');
      assert.equal(
        reverseLettersInPlace('The dog barks at midnight'),
        'ehT god skrab ta thgindim'
      );
      assert.equal(
        reverseLettersInPlace(' A simple challenge! '),
        ' A elpmis !egnellahc '
      );
      assert.equal(reverseLettersInPlace('Hi Justin'), 'iH nitsuJ');
    });
  });

  // allSimpleCombinations
  describe('allSimpleCombinations tests', () => {
    const allSimpleCombinations = allFunctions.allSimpleCombinations;
    it('should be a function', function() {
      assert.isFunction(allSimpleCombinations);
    });
    it('should output an array', () => {
      assert.isArray(allSimpleCombinations('test'));
    });
    it('should create an array with all simple combinations', () => {
      assert.deepEqual(allSimpleCombinations('test'), [
        't',
        'te',
        'tes',
        'test',
        'e',
        'es',
        'est',
        's',
        'st',
        't'
      ]);
      assert.deepEqual(allSimpleCombinations('cat'), [
        'c',
        'ca',
        'cat',
        'a',
        'at',
        't'
      ]);
    });
  });

  // alphabeticalOrder
  describe('alphabeticalOrder tests', () => {
    const alphabeticalOrder = allFunctions.alphabeticalOrder;
    it('should be a function', function() {
      assert.isFunction(alphabeticalOrder);
    });
    it('should output a string', () => {
      assert.isString(alphabeticalOrder('donuts'));
    });
    it('should return the letters of the word sorted in alphabetical order', () => {
      assert.equal(alphabeticalOrder('talk'), 'aklt');
      assert.equal(alphabeticalOrder('gossamer'), 'aegmorss');
    });
  });

  // returnLongestWord
  describe('returnLongestWord tests', () => {
    const returnLongestWord = allFunctions.returnLongestWord;
    it('should be a function', function() {
      assert.isFunction(returnLongestWord);
    });
    it('should output a string', () => {
      assert.isString(returnLongestWord('California Über Alles'));
    });
    it('should return the longest word', () => {
      assert.equal(returnLongestWord('Every day is like Sunday'), 'Sunday');
      assert.equal(
        returnLongestWord(
          'I went out to the forrest and caught a hundred thousand fireflies'
        ),
        'fireflies'
      );
    });
  });

  // isPrime
  describe('isPrime tests', () => {
    const isPrime = allFunctions.isPrime;
    it('should be a function', function() {
      assert.isFunction(isPrime);
    });
    it('should output a boolean', () => {
      assert.isBoolean(isPrime(5, true));
    });
    it('should return true if the number is a prime', () => {
      assert.equal(isPrime(5), true);
      assert.equal(isPrime(7), true);
    });
    it('should return false if the number is not prime', () => {
      assert.equal(isPrime(12), false);
      assert.equal(isPrime(4), false);
    });
  });

  // returnCoinBreakdown
  describe('returnCoinBreakdown tests', () => {
    const returnCoinBreakdown = allFunctions.returnCoinBreakdown;
    it('should be a function', function() {
      assert.isFunction(returnCoinBreakdown);
    });
    it('should output an object', () => {
      assert.isObject(returnCoinBreakdown(33));
    });
    it('should return an object that contains the number of coins that equal the input number', () => {
      assert.deepEqual(returnCoinBreakdown(46), { 25: 1, 10: 2, 5: 0, 1: 1 });
      assert.deepEqual(returnCoinBreakdown(19), { 25: 0, 10: 1, 5: 1, 1: 4 });
      assert.deepEqual(returnCoinBreakdown(82), { 25: 3, 10: 0, 5: 1, 1: 2 });
    });
  });

  // countVowels
  describe('countVowels tests', () => {
    const countVowels = allFunctions.countVowels;
    it('should be a function', function() {
      assert.isFunction(countVowels);
    });
    it('should output a number', () => {
      assert.isNumber(countVowels('banana'));
    });
    it('should return the number of vowels', () => {
      assert.equal(countVowels('apple'), 2);
      assert.equal(countVowels('tomato'), 3);
    });
    it('should be case-insensitive', () => {
      assert.equal(countVowels('Apple'), 2);
      assert.equal(countVowels('tomatO'), 3);
    });
  });

  // forEach
  describe('forEach tests', () => {
    const forEach = allFunctions.forEach;
    it('should be a function', function() {
      assert.isFunction(forEach);
    });
    it('should not return anything', function() {
      const returnValue = forEach([1, 2, 3], function(num) {
        return num * 2;
      });
      assert.isUndefined(returnValue);
    });
    it('should iterate through an array', () => {
      const output = [];
      forEach([1, 2, 3], function(num) {
        output.push(num * 2);
      });
      assert.deepEqual(output, [2, 4, 6]);
    });
  });
});
