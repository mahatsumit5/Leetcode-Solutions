type F = (x: number) => number;
// composite function
function compose(functions: F[]): F {
  return function (x: number) {
    let n = x;
    for (let i = functions.length; i > 0; i--) {
      const fn = functions[i - 1];
      n = fn(n);
    }
    return n;
  };
}

function compose2(functions: F[]): F {
  return function (x) {
    return functions.reverse().reduce((prev: number, curr: F) => {
      return curr(prev);
    }, x);
  };
}

const fn = compose2([(x) => x + 1, (x) => 2 * x]);

type Counter = {
  increment: () => number;
  decrement: () => number;
  reset: () => number;
};

function createCounter(init: number): Counter {
  let b = init;
  return {
    increment() {
      return (b = init + 1);
    },
    decrement() {
      return (b = init - 1);
    },
    reset() {
      return init;
    },
  };
}

/**
  const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */

type JSONValue =
  | null
  | boolean
  | number
  | string
  | JSONValue[]
  | { [key: string]: JSONValue };
type OnceFn = (...args: JSONValue[]) => JSONValue | undefined;

// function once(fn: Function): OnceFn {
//   return function (...args) {};
// }

/**
 * let fn = (a,b,c) => (a + b + c)
 * let onceFn = once(fn)
 *
 * onceFn(1,2,3); // 6
 * onceFn(2,3,6); // returns undefined without calling fn
 */

function createCounter2(n: number): () => number {
  return () => n++;
}

/**
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */

function plusOne(digits: number[]): number[] {
  let plusOneStr: string;
  let str: string = "";
  for (let i = 0; i < digits.length; i++) {
    const currentNumber = digits[i];
    str = str + currentNumber.toString();
  }

  console.log(str.slice(str.length - 1));
  if (str.length < 17) {
    plusOneStr = (Number(str) + 1).toString();
  } else {
    plusOneStr = (Number(str.slice(str.length - 1)) + 1).toString();
  }
  const reuslt = plusOneStr.split("").map((item) => Number(item));
  console.log(reuslt);
  return reuslt;
}

function isPalindrome(s: string): boolean {
  const strWithRemovedWithSpace = s
    .replace(/\s+/g, "")
    .toLowerCase()
    .replace(/[^\w\s]|_/g, "");
  const reversedString = strWithRemovedWithSpace
    .split("")
    .reverse()
    .join("")
    .toLowerCase();
  for (let i = 0; i < strWithRemovedWithSpace.length; i++) {
    const element = strWithRemovedWithSpace[i];
    console.log(element, reversedString[i]);
    if (element !== reversedString[i]) {
      return false;
    }
  }
  return true;
}

// const result = isPalindrome("A man, a plan, a canal: Panama");
// console.log(result ? "isPalindrome" : "not palindrome");

/*

Easy
Topics
Companies
Hint
Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same. Then return the number of unique elements in nums.

Consider the number of unique elements of nums to be k, to get accepted, you need to do the following things:

Change the array nums such that the first k elements of nums contain the unique elements in the order they were present in nums initially. The remaining elements of nums are not important as well as the size of nums.
Return k.
Custom Judge:

The judge will test your solution with the following code:

int[] nums = [...]; // Input array
int[] expectedNums = [...]; // The expected answer with correct length

int k = removeDuplicates(nums); // Calls your implementation

assert k == expectedNums.length;
for (int i = 0; i < k; i++) {
    assert nums[i] == expectedNums[i];
}
If all assertions pass, then your solution will be accepted.

 

Example 1:

Input: nums = [1,1,2]
Output: 2, nums = [1,2,_]
Explanation: Your function should return k = 2, with the first two elements of nums being 1 and 2 respectively.
It does not matter what you leave beyond the returned k (hence they are underscores).
Example 2:

Input: nums = [0,0,1,1,1,2,2,3,3,4]
Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]
Explanation: Your function should return k = 5, with the first five elements of nums being 0, 1, 2, 3, and 4 respectively.
It does not matter what you leave beyond the returned k (hence they are underscores).
 

*/

// int[] nums = [...]; // Input array
// int[] expectedNums = [...]; // The expected answer with correct length

// int k = removeDuplicates(nums); // Calls your implementation

// assert k == expectedNums.length;
// for (int i = 0; i < k; i++) {
//     assert nums[i] == expectedNums[i];
// }

function removeDuplicates(nums: number[]): number[] {
  const newArray: number[] = [];
  nums.map((item) => {
    if (newArray.includes(item)) {
      return;
    } else {
      newArray.push(item);
    }
  });
  console.log(newArray);
  return newArray;
}

function sumOfMultiples(n: number): number {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 || i % 5 === 0 || i % 7 === 0) {
      sum += i;
    }
  }
  return sum;
}

function divide(dividend: number, divisor: number): number {
  const num = dividend / divisor;
  if (num < 0) {
    return Math.ceil(num);
  } else {
    return Math.floor(num);
  }
}

const ans = divide(-2147483648, -1);

/*

Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

You must implement a solution with a linear runtime complexity and use only constant extra space.

 

Example 1:

Input: nums = [2,2,1]
Output: 1
Example 2:

Input: nums = [4,1,2,1,2]
Output: 4
Example 3:

Input: nums = [1]
Output: 1
*/
function singleNumber(nums: number[]): number {
  let num: number;

  return num;
}
