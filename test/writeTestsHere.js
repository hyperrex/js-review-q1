// require('core-js/es6/symbol');
// require('core-js/fn/symbol/iterator');
const allFunctions = require('../index');
const assert = require('chai').assert;
const should = require('chai').should;
const chaiIterator = require('chai-iterator');
// chai.use(chaiIterator);

describe('all tests for your functions', () => {

  // add
  describe('add tests', () => {
    const addFunc = allFunctions.add;
    it('should add positive numbers', () => {
      assert.equal(addFunc(1, 3), 4);
      assert.equal(addFunc(8, 2), 10);
    });
    it('should add negative numbers', () => {
      assert.equal(addFunc(-1, -3), -4);
      assert.equal(addFunc(-10, -3), -13);
    });
    it('should output a number', () => {
      assert.isNumber(addFunc(5, 5));
    });
  });

  // subtract
  describe('subtract tests', () => {
    const subFunc = allFunctions.subtract;
    it('should subtract positive numbers', () => {
      assert.equal(subFunc(1, 3), -2);
      assert.equal(subFunc(100, 87), 13);
    });
    it('should subtract negative numbers', () => {
      assert.equal(subFunc(-1, -3), 2);
      assert.equal(subFunc(-39, -11), -28);
    });
    it('should output a number', () => {
      assert.isNumber(subFunc(8, 1));
    });
  });

  // calculateSum
  describe('calculateSum tests', () => {
    const subFunc = allFunctions.calculateSum;
    it('should sum positive array', () => {
      assert.equal(subFunc([1, 3, 5]), 9);
      assert.equal(subFunc([10, 7]), 17);
    });
    it('should sum negative array', () => {
      assert.equal(subFunc([-6, -3]), -9);
      assert.equal(subFunc([-9, 11]), 2);
    });
    it('should output a number', () => {
      assert.isNumber(subFunc([1, 2, 3]));
    });
  });

  // map
  describe('map tests', () => {
    const subFunc = allFunctions.map;
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
  xdescribe('reverseLettersInPlace tests', () => {
    const subFunc = allFunctions.reverseLettersInPlace;
    it('should output a string', () => {
      assert.isString(subFunc('Hello world'));
    });
    it('should reverse letters while keeping words in place', () => {
      assert.equal(subFunc('Hello World'), 'olleH dlrow');
      assert.equal(subFunc('The dog barks at midnight'), 'ehT god skrab ta thgindim');
    });
  });

  // allSimpleCombinations
  xdescribe('allSimpleCombinations tests', () => {
    const subFunc = allFunctions.allSimpleCombinations;
    it('should output an array', () => {
      assert.isArray(subFunc('test'));
    });
    it('should create an array with all simple combinations', () => {
      assert.deepEqual(subFunc('test'), ['t', 'te', 'tes', 'test', 'e', 'es', 'est', 's', 'st', 't']);
    });
    it('should create an array with all simple combinations', () => {
      assert.equal(subFunc('test'), ['t', 'te', 'tes', 'test', 'e', 'es', 'est', 's', 'st', 't']);
    });
  });

  // alphabeticalOrder
  xdescribe('alphabeticalOrder tests', () => {
    const subFunc = allFunctions.alphabeticalOrder;

  });

  // returnLongestWord
  xdescribe('returnLongestWord tests', () => {
    const subFunc = allFunctions.returnLongestWord;

  });

  // isPrime
  xdescribe('isPrime tests', () => {
    const subFunc = allFunctions.isPrime;

  });

  // returnCoinBreakdown
  xdescribe('returnCoinBreakdown tests', () => {
    const subFunc = allFunctions.returnCoinBreakdown;

  });

  // countVowels
  xdescribe('countVowels tests', () => {
    const subFunc = allFunctions.countVowels;

  });

  // forEach
  xdescribe('forEach tests', () => {
    const subFunc = allFunctions.forEach;
    // should work with array
    // should work with object
  });
});
