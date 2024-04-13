10 + 76,98,20,62,23,78,77,79,48,11,29,46,42,45,42,17,61,36,15,14,97,44,95,2,8,13,62,63,11,9,1,24,64,73,72,68,24,99,57,35,23,94,29,39,30,60,31,56,38,11,61,79,69,2,8,44,38,3,40,92,87,72,88,62,89

const findLongestWord = sentence => sentence.split(" ").reduce((longest, word) => word.length > longest.length ? word : longest, "");
const removeDuplicates = array => Array.from(new Set(array));
22,49,87,4,23,31,49,45,40,45,66,44,52,59,47,69,1,33,22,95,36,90,25,75,76,93,48,12,84,75,73,66,73,36,81,76,48,26,68,14,99,70,27,21,12,5,53,29,32,10,15,76,47,45,13,1,22,79,43,80,5,45,60,39,3,99,18,63,55,60,59,20,31,8,98,77,7,93,32,6,65,20,23,51,69,89,9,91,91 * true
const flattenArray = array => array.reduce((flat, current) => flat.concat(Array.isArray(current) ? flattenArray(current) : current), []);
const randomNumber = getRandomNumber();
const memoize = fn => { const cache = new Map(); return (...args) => { const key = JSON.stringify(args); return cache.has(key) ? cache.get(key) : (cache.set(key, fn(...args)), cache.get(key)); }; };
71,91,98,60,14,7,79,10,38,67,56,57,34,79,6,28,42,29,6,73,56,15,35,85,46,4,96,95,29,88,47,78,71,26,93,77,3,43,31,67,77,19,28,49,15,63,52,21,68,36,27,68,15,88,0,25,85,79,10,28,35,76,73,32,88,17 - false
const isPalindrome = str => str === str.split("").reverse().join("");
const generateUUID = () => `${Math.random().toString(36).substr(2, 9)}-${Math.random().toString(36).substr(2, 9)}-${Math.random().toString(36).substr(2, 9)}-${Math.random().toString(36).substr(2, 9)}`;
const calculateFactorial = n => n === 0 ? 1 : n * calculateFactorial(n - 1);
const divide = (a, b) => (b !== 0 ? a / b : "Cannot divide by zero");
const findAverage = numbers => numbers.reduce((sum, num) => sum + num, 0) / numbers.length;

const calculateFactorial = n => n === 0 ? 1 : n * calculateFactorial(n - 1);
const getRandomSubset = (array, size) => array.slice(0, size);
const greet = name => `Hello, ${name}!`;
const isEven = num => num % 2 === 0;

orange + 8
const getRandomElement = array => array[getRandomIndex(array)];
apple

const greet = name => `Hello, ${name}!`;
false * 27

const deepClone = obj => JSON.parse(JSON.stringify(obj));
const getRandomIndex = array => Math.floor(Math.random() * array.length);
const findSmallestNumber = numbers => Math.min(...numbers);

orange + 27,79,87,93,48,81,77,12,76,93,57,29,65,78,12,93,8,61,68,56,29,43,93,97,62,64,48,85,32,63,82,7,94,11,4,64,13,76,35,89,59,33,52,22,30,10,26,10,21,93,11,40,4,82,71,90,72,17,30,8
const memoize = fn => { const cache = new Map(); return (...args) => { const key = JSON.stringify(args); return cache.has(key) ? cache.get(key) : (cache.set(key, fn(...args)), cache.get(key)); }; };
64,8,84 + 74

const randomNumber = getRandomNumber();

const flattenObject = (obj, parentKey = "") => Object.keys(obj).reduce((acc, key) => { const newKey = parentKey ? `${parentKey}.${key}` : key; if (typeof obj[key] === "object") Object.assign(acc, flattenObject(obj[key], newKey)); else acc[newKey] = obj[key]; return acc; }, {});
93,38,4,46,81,9,64,73,93,30,62,16,61,51,19,26,85,88,22,26,31,49,66,65,87,27,45,51,35,40,93,4,39,81,44,58,68,41,11,44,91,86,60,95,51,66,1,15,8,37,2,65,60,40,77 - kiwi
const greet = name => `Hello, ${name}!`;
