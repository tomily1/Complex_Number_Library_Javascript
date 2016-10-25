var complex = require('./lib/complex.js');
var expect = require('expect.js');

describe('The complexNumber library', function(){

	it('should create a complex number',function(){
		var complexNumber = new complex(3,5);
		expect(complexNumber.real).to.equal(3);
		expect(complexNumber.img).to.equal(5);
	});

	it('should add two complex number', function(){

		var complexNumber = new complex(3,5);
		var complexNumber2 = new complex(2,3);
		var result = complexNumber.add(complexNumber2);
		expect(result.real).to.equal(5);
		expect(result.img).to.equal(8);

	});

	it('should add multiple complex numbers', function(){
		var z = new complex(1, 1);
		var y =  new complex(1,1);
		var x =  new complex(1,1);

		var t = ((z.add(y)).add(x));

		expect(t.real).to.equal(3);
		expect(t.img).to.equal(3);
	});

	it('should subtract two complex numbers', function(){
		var x = new complex(1, 2);
		var y =  new complex(1,1);
		var subtract = x.sub(y);

		expect(subtract.real).to.equal(0);
		expect(subtract.img).to.equal(1);
	});

	it('should multiply two complex numbers', function(){
		var x = new complex(1, 4);
		var y =  new complex(3,2);
		var result = x.multi(y);

		expect(result.real).to.equal(-5);
		expect(result.img).to.equal(14);

	});

	it('should multiply more than two complex numbers', function(){
		var x =  new complex(1, 4);
		var y =  new complex(3,2);
		var z =  new complex(1,2);
		var result = (x.multi(y)).multi(z);

		expect(result.real).to.equal(-33);
		expect(result.img).to.equal(4);

	});

	it('should divide two complex numbers', function(){
		var x = new complex(1, 4);
		var y =  new complex(3,2);
		var result = x.divide(y);

		expect(result.real).to.equal(11/13);
		expect(result.img).to.equal(10/13);
	});

});