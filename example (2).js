var complex = require('complex_number_library');

complexNum = new complex(4,3);
complexNum2 = new complex(3,4);

addComplexNums = complexNum.multiply(complexNum2).toString();

console.log(addComplexNums);