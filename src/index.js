const parseFunction = require('parse-function');
const test = require('./testing')
const app = parseFunction(
    {
//   ecmaVersion: 2017,
    }
);

const result = app.parse(test.fixtureFn);
console.log(result);
 
// see more
console.log(result.name); // => null
console.log(result.isNamed); // => false
console.log(result.isArrow); // => true
console.log(result.isAnonymous); // => true
 
// array of names of the arguments
console.log(result.args); // => ['a', 'b', 'c']
 
// comma-separated names of the arguments
console.log(result.params); // => 'a, b, c'


console.log(result.value);