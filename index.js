/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function sum(nums = [3, 2, 3], target = 6) {
  let number = [];
  let x = 0;
  let y;

  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (target === nums[i] + nums[j] && i !== j) {
        number = [i, j];
      }
    }
  }
  return number;
}

/**
 * @param {string} s
 * @return {number}
 */
var minOperations = function (s = "10010100") {
  let x = "0";
  let y = "1";
  let number = 0;

  const stringLength = s.length;
  for (let i = 0; i < stringLength; i++) {
    if (s.charAt(i) === s.charAt(i + 1)) {
      i++;
      number += 1;
    }
  }
  return number;
};

// palindrome number

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x = 100122) {
  let reverseOrder = "";
  const numberString = x.toString();
  const stringLength = numberString.length;
  for (let i = stringLength - 1; i >= 0; i--) {
    reverseOrder += numberString.charAt(i);
  }

  if (Number(reverseOrder) === x) {
    return true;
  }
  return false;
};

// convert roman number to actual number

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s = "MCMXCIV") {
  let I = 1;
  let V = 5;
  let X = 10;
  let L = 50;
  let C = 100;
  let D = 500;
  let M = 1000;
  let map = { I, V, X, L, C, D, M };
  let number = 0;
  let nextchar = "";

  for (let i = 0; i < s.length; i++) {
    const char = s.charAt(i);
    nextchar = s.charAt(i + 1);
    for (const key in map) {
      if (char === key) {
        if (map[nextchar] > map[char]) {
          number = number + map[nextchar] - map[char];
          i++;
        } else number += map[key];
      }
    }
  }
  return number;
};

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs = ["flower", "flow", "fllighssst"]) {
  let output = "";
};

longestCommonPrefix();

// add plus one to the given array
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits = [9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3]) {
  let ans = [];
  let string = "";
  for (let i = 0; i < digits.length; i++) {
    string += String(digits[i]);
  }
  const oneAdded = String(Number(string) + 1);

  for (let j = 0; j < oneAdded.length; j++) {
    ans.push(Number(oneAdded.charAt(j)));
  }
  console.log(ans);
  return ans;
};

// find the letter that was added

/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function (
  s = "ymbgaraibkfmvocpizdydugvalagaivdbfsfbepeyccqfepzvtpyxtbadkhmwmoswrcxnargtlswqemafandgkmydtimuzvjwxvlfwlhvkrgcsithaqlcvrihrwqkpjdhgfgreqoxzfvhjzojhghfwbvpfzectwwhexthbsndovxejsntmjihchaotbgcysfdaojkjldprwyrnischrgmtvjcorypvopfmegizfkvudubnejzfqffvgdoxohuinkyygbdzmshvyqyhsozwvlhevfepdvafgkqpkmcsikfyxczcovrmwqxxbnhfzcjjcpgzjjfateajnnvlbwhyppdleahgaypxidkpwmfqwqyofwdqgxhjaxvyrzupfwesmxbjszolgwqvfiozofncbohduqgiswuiyddmwlwubetyaummenkdfptjczxemryuotrrymrfdxtrebpbjtpnuhsbnovhectpjhfhahbqrfbyxggobsweefcwxpqsspyssrmdhuelkkvyjxswjwofngpwfxvknkjviiavorwyfzlnktmfwxkvwkrwdcxjfzikdyswsuxegmhtnxjraqrdchaauazfhtklxsksbhwgjphgbasfnlwqwukprgvihntsyymdrfovaszjywuqygpvjtvlsvvqbvzsmgweiayhlubnbsitvfxawhfmfiatxvqrcwjshvovxknnxnyyfexqycrlyksderlqarqhkxyaqwlwoqcribumrqjtelhwdvaiysgjlvksrfvjlcaiwrirtkkxbwgicyhvakxgdjwnwmubkiazdjkfmotglclqndqjxethoutvjchjbkoasnnfbgrnycucfpeovruguzumgmgddqwjgdvaujhyqsqtoexmnfuluaqbxoofvotvfoiexbnprrxptchmlctzgqtkivsilwgwgvpidpvasurraqfkcmxhdapjrlrnkbklwkrvoaziznlpor",
  t = "qhxepbshlrhoecdaodgpousbzfcqjxulatciapuftffahhlmxbufgjuxstfjvljybfxnenlacmjqoymvamphpxnolwijwcecgwbcjhgdybfffwoygikvoecdggplfohemfypxfsvdrseyhmvkoovxhdvoavsqqbrsqrkqhbtmgwaurgisloqjixfwfvwtszcxwktkwesaxsmhsvlitegrlzkvfqoiiwxbzskzoewbkxtphapavbyvhzvgrrfriddnsrftfowhdanvhjvurhljmpxvpddxmzfgwwpkjrfgqptrmumoemhfpojnxzwlrxkcafvbhlwrapubhveattfifsmiounhqusvhywnxhwrgamgnesxmzliyzisqrwvkiyderyotxhwspqrrkeczjysfujvovsfcfouykcqyjoobfdgnlswfzjmyucaxuaslzwfnetekymrwbvponiaojdqnbmboldvvitamntwnyaeppjaohwkrisrlrgwcjqqgxeqerjrbapfzurcwxhcwzugcgnirkkrxdthtbmdqgvqxilllrsbwjhwqszrjtzyetwubdrlyakzxcveufvhqugyawvkivwonvmrgnchkzdysngqdibhkyboyftxcvvjoggecjsajbuqkjjxfvynrjsnvtfvgpgveycxidhhfauvjovmnbqgoxsafknluyimkczykwdgvqwlvvgdmufxdypwnajkncoynqticfetcdafvtqszuwfmrdggifokwmkgzuxnhncmnsstffqpqbplypapctctfhqpihavligbrutxmmygiyaklqtakdidvnvrjfteazeqmbgklrgrorudayokxptswwkcircwuhcavhdparjfkjypkyxhbgwxbkvpvrtzjaetahmxevmkhdfyidhrdeejapfbafwmdqjqszwnwzgclitdhlnkaiyldwkwwzvhyorgbysyjbxsspnjdewjxbhpsvj"
) {
  for (let i = 0; i < t.length; i++) {
    if (s.charAt(i) !== t.charAt(i)) {
      return t.charAt(i);
    }
  }
};

/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  return Math.floor(Math.sqrt(x));
};

mySqrt();

/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function (num = 4) {
  return Math.sqrt(num) % 1 === 0;
};
isPerfectSquare();
// sum of binary

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a = "1", b = "101") {
  let sum = "";
  const greaterLength = b.length > a.length ? b.length : a.length;
  for (let i = greaterLength - 1; i >= 0; i--) {
    if (a.charAt(i) === "0" && b.charAt(i) === "0") {
      sum = "0";
    }
    if (a.charAt(i) === "1" && b.charAt(i) === "1") {
      sum = "10" + sum;
    }
    if (a.charAt(i) === "1" && b.charAt(i) === "0") {
      sum = "1" + sum;
    }
    console.log("object");
  }
  console.log(sum);
};

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s = "   fly me   to   the moon  ") {
  const stringArray = s.split(" ");
  const newArr = stringArray.filter((arr) => arr);
  return newArr.pop().length;
};

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums = [1, 3, 5, 6], target = 4) {
  if (nums.filter((n) => n === target).length) {
    return nums.indexOf(target);
  }
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > target) {
      const result = i;
      return result;
    }
  }
  return nums.length;
};

/**
 * @param {Promise} promise1
 * @param {Promise} promise2
 * @return {Promise}
 */
var addTwoPromises = async function (promise1, promise2) {
  const a = await promise1;
  const b = await promise2;
  return a + b;
};

/**
 * @param {Object|Array} obj
 * @return {boolean}
 */
var isEmpty = function (obj = {}) {
  if (obj.length) console.log(" ", false);
  if (Object.keys(obj).length) console.log(",", false, Object.keys(obj));
  console.log(",", true);
};

/**
 * @return {null|boolean|number|string|Array|Object}
 */
Array.prototype.last = function () {};

/**
 * const arr = [1, 2, 3];
 * arr.last(); // 3
 */

// join two array

// 2722. Join Two Arrays by ID
// Medium
// Companies
// Given two arrays arr1 and arr2, return a new array joinedArray. All the objects in each of the two inputs arrays will contain an id field that has an integer value. joinedArray is an array formed by merging arr1 and arr2 based on their id key. The length of joinedArray should be the length of unique values of id. The returned array should be sorted in ascending order based on the id key.

// If a given id exists in one array but not the other, the single object with that id should be included in the result array without modification.

// If two objects share an id, their properties should be merged into a single object:

// If a key only exists in one object, that single key-value pair should be included in the object.
// If a key is included in both objects, the value in the object from arr2 should override the value from arr1.

/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
var join = function (arr1, arr2) {
  let items = arr1.concat(arr2);
  let result = {};
  for (const obj of items) {
    if (!result[obj.id]) {
      result[obj.id] = obj;
      continue;
    }

    result[obj.id] = { ...result[obj.id], ...obj };
  }
  return Object.values(result);
};
