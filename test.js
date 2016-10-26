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

	it('should subtract complex numbers', function(){
		var x = new complex(1, 2);
		var y =  new complex(1,1);
		var z = new complex(1, 11);

		var subtract = x.sub(y);		

		expect(subtract.real).to.equal(0);
		expect(subtract.img).to.equal(1);
	});

	it('should subtract multiple complex numbers', function(){
		
		var z = new complex(1, 11);
		var y =  new complex(1,1);
		var x = new complex(1, 2);

		var t = ((z.sub(y)).sub(x));
		
		expect(t.real).to.equal(-1);
		expect(t.img).to.equal(8);
	});	

	it('should multiply two complex numbers', function(){
		var x = new complex(1, 4);
		var y =  new complex(3,2);
		var result = x.multiply(y);

		expect(result.real).to.equal(-5);
		expect(result.img).to.equal(14);

	});

	it('should multiply more than two complex numbers', function(){
		var x =  new complex(1, 4);
		var y =  new complex(3,2);
		var z =  new complex(1,2);
		var result = (x.multiply(y)).multiply(z);

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

	it('should find the conjugate of complex numbers', function(){

		var conjugateNumber = new complex(1 , 3).conjugate();

		expect(conjugateNumber.real).to.equal(1);
		expect(conjugateNumber.img).to.equal(-3);

	});

	it('should find the conjugate of complex numbers', function(){

		var conjugateNumber = new complex(-1 , -3).conjugate();

		expect(conjugateNumber.real).to.equal(-1);
		expect(conjugateNumber.img).to.equal(3);
	});

	it('should find the magnitude of complex numbers', function(){

		var magnitudeNumber = new complex(-3 , -4).magnitude();
		expect(magnitudeNumber).to.equal(5);
	});

	it('should test the equals method', function(){
		expect(new complex(2, 3).equals(new complex(2, 3))).to.be.ok();
		expect(new complex(2, 3).equals(new complex(2, 4))).not.to.be.ok();
		expect(new complex(2, 3).equals(new complex(1, 3))).not.to.be.ok();
	});

	it('should multiply complex numbers by -1', function(){

		var negateNumber = new complex(-3 , -4).negate();
		expect(negateNumber.real).to.equal(3);
		expect(negateNumber.img).to.equal(4);
	});

	it('should calculate the angle between the real and the im vectors', function(){
		expect(new complex(1, 1).angle()).to.equal(Math.PI / 4);
		expect(new complex(-1, -1).angle()).to.equal(-3 * Math.PI / 4);
		expect(new complex(0, 1).angle()).to.equal(Math.PI / 2);
		expect(new complex(1, 0.5 * Math.sqrt(4 / 3)).angle()).to.equal(Math.PI / 6);
		expect(new complex(1, 0.5 * Math.sqrt(4 / 3)).angle()).to.equal(Math.PI / 6);
	});

	it('should return values in string', function(){
		var value1 = new complex(1,3);
		var value2 = new complex(2,1);
		var total = value1.add(value2);
		expect(total.toString()).to.equal('3+4i');
	});



});