#!/usr/bin/env node

var complex = function(real, img){
	this.real = real;
	this.img = img;
};

complex.prototype = {

	returnResult: function(a, b){
		this.real = a;
		this.img = b;
		return this;
	},

	add: function(numToAdd){
		numToAdd = this.from(numToAdd);
		return this.returnResult(this.real + numToAdd.real, this.img+numToAdd.img);
	},

	sub: function(numToSub){

		numToSub = this.from(numToSub);

		return this.returnResult(this.real-numToSub.real, this.img-numToSub.img);

	},

	multiply: function(numToMultiply){

		numToMultiply = this.from(numToMultiply);
		var a = this.real;
		var b = this.img;

		return this.returnResult(
			numToMultiply.real * a - numToMultiply.img * b,
			b * numToMultiply.real + numToMultiply.img * a
			); 

	}
};

complex.prototype.from = function(real, img){

	if (real instanceof complex){ 
		return new complex(real.real, real.img)
	};

		real = +real;
		img = +img;
		return new complex(isNaN(real) ? 0 : real, isNaN(img) ? 0 : img);
	};



module.exports = complex;

