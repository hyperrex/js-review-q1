const assert = require('chai').assert;
const allFunctions = require('../index');

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
    it('should output number', () => {
      assert.isNumber(addFunc(5, 5));
    });
  })

  // subtract
  describe('subtract tests', () => {
    const subFunc = allFunctions.subtract;

    it('should subtract positive numbers', () => {
      assert.equal(subFunc(1, 3), -2);
      assert.equal(subFunc(100, 87), 13);
    })
    it('should subtract negative numbers', () => {
      assert.equal(subFunc(-1, -3), 2);
      assert.equal(subFunc(-39, -11), -28);
    })
    it('should output number', () => {
      assert.isNumber(subFunc(8, 1));
    });
  })

  // calculateSum
  describe('multiplication tests', () => {
    const subFunc = allFunctions.calculateSum;

    it('should multiply positive numbers', () => {
      assert.equal(subFunc([1, 3, 5]), 15);
      assert.equal(subFunc([10, 7]), 70);
    })
    it('should multiply negative numbers', () => {
      assert.equal(subFunc([-6, -3]), 18);
      assert.equal(subFunc([-9, 11]), -99);
    })
    it('should return 0 when one of the inputs is 0', () => {
      assert.equal(subFunc([0, 1, 2]), 0);
    })
    it('should output number', () => {
      assert.isNumber(subFunc([1, 2, 3]));
    });
  })

  // forEach

  // filter

  // reverseLettersInPlace

  // allSimpleCombinations

  // alphabeticalOrder

  // returnLongestWord

  // isPrime

  // returnCoinBreakdown

  // countVowels

})
