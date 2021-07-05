var qs = require('qs');

var obj = qs.parse('a=c');
console.log(Object.keys(obj).join(','))