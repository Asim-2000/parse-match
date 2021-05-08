const parse = require('parse-js');
var test = require('./testing')
var first = parse().bool().parse(test.first); // true
// var second =  parse().match('Hello1').parse(test); // { atest: 'test123' }

console.log(first)