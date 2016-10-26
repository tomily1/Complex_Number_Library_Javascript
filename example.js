var complex = require('./lib/complex.js');

var complexes = new complex(1,3);
var complex2 = new complex(1,-3);
var comp = new complex((1,4),(1,-2))


var answer2 = (comp).divide(2);


console.log("\n",answer2.toString());

