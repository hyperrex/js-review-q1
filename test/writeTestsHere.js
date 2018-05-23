const allFunctions = require('../index');
const assert = require('chai').assert;
const expect = require('chai').expect;
// const chaiIterator = require('chai-iterator');
// require('core-js/es6/symbol');
// require('core-js/fn/symbol/iterator');
// chai.use(chaiIterator);

describe('all tests for your functions', () => {

  // add
  describe('add tests', () => {
    const subFunc = allFunctions.add;
    it('should be a function', function() {
      expect(subFunc).to.be.an.instanceOf(Function);
    });
    it('should output a number', () => {
      assert.isNumber(subFunc(5, 5));
    });
    it('should add positive numbers', () => {
      assert.equal(subFunc(1, 3), 4);
      assert.equal(subFunc(8, 2), 10);
    });
    it('should add negative numbers', () => {
      assert.equal(subFunc(-1, -3), -4);
      assert.equal(subFunc(-10, -3), -13);
    });
  });

  // subtract
  describe('subtract tests', () => {
    const subFunc = allFunctions.subtract;
    it('should be a function', function() {
      expect(subFunc).to.be.an.instanceOf(Function);
    });
    it('should output a number', () => {
      assert.isNumber(subFunc(8, 1));
    });
    it('should subtract positive numbers', () => {
      assert.equal(subFunc(1, 3), -2);
      assert.equal(subFunc(100, 87), 13);
    });
    it('should subtract negative numbers', () => {
      assert.equal(subFunc(-1, -3), 2);
      assert.equal(subFunc(-39, -11), -28);
    });
  });

  // calculateSum
  describe('calculateSum tests', () => {
    const subFunc = allFunctions.calculateSum;
    it('should be a function', function() {
      expect(subFunc).to.be.an.instanceOf(Function);
    });
    it('should output a number', () => {
      assert.isNumber(subFunc([1, 2, 3]), 3);
    });
    it('should sum positive array', () => {
      assert.equal(subFunc([1, 3, 5]), 9);
      assert.equal(subFunc([10, 7]), 17);
    });
    it('should sum negative array', () => {
      assert.equal(subFunc([-6, -3]), -9);
      assert.equal(subFunc([-9, 11]), 2);
    });
  });

  // map
  describe('map tests', () => {
    const subFunc = allFunctions.map;
    it('should be a function', function() {
      expect(subFunc).to.be.an.instanceOf(Function);
    });
    it('should output an array', () => {
      const double = function(num) { return num * 2 };
      assert.isArray(subFunc([1, 2, 3], double), [2, 4, 6]);
    });
    it('should not mutate the original array', () => {
      const array = [1, 2, 3];
      const double = function(num) { return num * 2 };
      assert.notDeepEqual(subFunc(array, double), array);
    });
    it('should return a new array with every element doubled', () => {
      const double = function(num) { return num * 2 };
      assert.deepEqual(subFunc([1, 2, 3], double), [2, 4, 6]);
    });
    it('should return a new array with every multipled by ten', () => {
      const timesTen = function(num) { return num * 10 };
      assert.deepEqual(subFunc([1, 21, 3, 42], timesTen), [10, 210, 30, 420]);
    });
    it('should return a new array with every word capitalized', () => {
      const nowShouting = function(word) { return word[0].toUpperCase() + word.slice(1) };
      assert.deepEqual(subFunc(['every', 'day', 'is', 'like', 'sunday'], nowShouting), ['Every', 'Day', 'Is', 'Like', 'Sunday']);
    });
  });

  // filter
  describe('filter tests', () => {
    const subFunc = allFunctions.filter;
    it('should be a function', function() {
      expect(subFunc).to.be.an.instanceOf(Function);
    });
    it('should output an array', () => {
      const isOdd = function(num) { return num % 2 !== 0; };
      assert.isArray(subFunc([1, 2, 3], isOdd));
    });
    it('should not mutate the original array', () => {
      const array = [1, 2, 3];
      const isOdd = function(num) { return num % 2 !== 0; };
      assert.notDeepEqual(subFunc(array, isOdd), array);
    });
    it('should return only odd numbers', () => {
      const isOdd = function(num) { return num % 2 !== 0; };
      assert.deepEqual(subFunc([1, 2, 3], isOdd), [1, 3]);
    });
    it('should return only words longer than 4 letters', () => {
      const longWords = function(word) { return word.length > 4; };
      assert.deepEqual(subFunc(['apple', 'pear', 'banana', 'guava'], longWords), ['apple', 'banana', 'guava']);
    });
  });

  // reverseLettersInPlace
  describe('reverseLettersInPlace tests', () => {
    const subFunc = allFunctions.reverseLettersInPlace;
    it('should be a function', function() {
      expect(subFunc).to.be.an.instanceOf(Function);
    });
    it('should output a string', () => {
      assert.isString(subFunc('Hello world'));
    });
    it('should reverse letters while keeping words in place', () => {
      assert.equal(subFunc('Hello World'), 'olleH dlroW');
      assert.equal(subFunc('The dog barks at midnight'), 'ehT god skrab ta thgindim');
      assert.equal(subFunc(' A simple challenge! '), ' A elpmis !egnellahc ');
      assert.equal(subFunc('Hi Justin'), 'iH nitsuJ');
    });
  });

  // allSimpleCombinations
  describe('allSimpleCombinations tests', () => {
    const subFunc = allFunctions.allSimpleCombinations;
    it('should be a function', function() {
      expect(subFunc).to.be.an.instanceOf(Function);
    });
    it('should output an array', () => {
      assert.isArray(subFunc('test'));
    });
    it('should create an array with all simple combinations', () => {
      assert.deepEqual(subFunc('test'), ['t', 'te', 'tes', 'test', 'e', 'es', 'est', 's', 'st', 't']);
      assert.deepEqual(subFunc('cat'), ['c', 'ca', 'cat', 'a', 'at', 't']);
    });
  });

  // alphabeticalOrder
  describe('alphabeticalOrder tests', () => {
    const subFunc = allFunctions.alphabeticalOrder;
    it('should be a function', function() {
      expect(subFunc).to.be.an.instanceOf(Function);
    });
    it('should output a string', () => {
      assert.isString(subFunc('donuts'));
    });
    it('should return the letters of the word sorted in alphabetical order', () => {
      assert.equal(subFunc('talk'), 'aklt');
      assert.equal(subFunc('gossamer'), 'aegmorss');
    });
  });

  // returnLongestWord
  describe('returnLongestWord tests', () => {
    const subFunc = allFunctions.returnLongestWord;
    it('should be a function', function() {
      expect(subFunc).to.be.an.instanceOf(Function);
    });
    it('should output a string', () => {
      assert.isString(subFunc('California Über Alles'));
    });
    it('should return the longest word', () => {
      assert.equal(subFunc('Every day is like Sunday'), 'Sunday');
      assert.equal(subFunc('I went out to the forrest and caught a hundred thousand fireflies'), 'fireflies');
    });
  });

  // isPrime
  describe('isPrime tests', () => {
    const subFunc = allFunctions.isPrime;
    it('should be a function', function() {
      expect(subFunc).to.be.an.instanceOf(Function);
    });
    it('should output a boolean', () => {
      assert.isBoolean(subFunc(5, true));
    });
    it('should return true if the number is a prime', () => {
      assert.equal(subFunc(5), true);
      assert.equal(subFunc(7), true);
    });
    it('should return false if the number is not prime', () => {
      assert.equal(subFunc(12), false);
      assert.equal(subFunc(4), false);
    });
  });

  // returnCoinBreakdown
  describe('returnCoinBreakdown tests', (num) => {
    const subFunc = allFunctions.returnCoinBreakdown;
    it('should be a function', function() {
      expect(subFunc).to.be.an.instanceOf(Function);
    });
    it('should output an object', () => {
      assert.isObject(subFunc(33));
    });
    it('should return an object that contains the number of coins that equal the input number', () => {
      assert.deepEqual(subFunc(46), {25:1, 10:2, 5:0, 1:1});
      assert.deepEqual(subFunc(19), {25:0, 10:1, 5:1, 1:4});
      assert.deepEqual(subFunc(82), {25:3, 10:0, 5:1, 1:2});
    });
  });

  // countVowels
  describe('countVowels tests', (str) => {
    const subFunc = allFunctions.countVowels;
    it('should be a function', function() {
      expect(subFunc).to.be.an.instanceOf(Function);
    });
    it('should output a number', () => {
      assert.isNumber(subFunc('banana'));
    });
    it('should return the number of vowels', () => {
      assert.equal(subFunc('apple'), 2);
      assert.equal(subFunc('tomato'), 3);
    });
  });

  // forEach
  describe('forEach tests', () => {
    const subFunc = allFunctions.forEach;
    it('should be a function', function() {
      expect(subFunc).to.be.an.instanceOf(Function);
    });
  });
});