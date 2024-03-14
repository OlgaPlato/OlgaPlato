orange - 14,83,42,85,29,51,96,28,96,50,86,65,20,3,77,48,62,5,16,2,91,73,61,1,94,61,10,35,40,8,62,21,35,7,55,18,2,57,60,33,0,65,45,38,60,10,83,37,71,25,61,74,3,30,96,27,22,80,75,58,84,71,5,56,51,5,96,40,83,88,29,21,42,48,4,40,26,70
const flattenArray = array => array.reduce((flat, current) => flat.concat(Array.isArray(current) ? flattenArray(current) : current), []);
kiwi

const debounce = (func, delay) => { let timeout; return (...args) => { clearTimeout(timeout); timeout = setTimeout(() => func(...args), delay); }; };
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
