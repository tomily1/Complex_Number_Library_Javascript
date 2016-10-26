#!/usr/bin/env node

var complex = function(real, img){
	this.real = real;
	this.img = img;
};

var sinh = function(num){ // to calculate the sinh of a value, (e^value - e ^ -value)/2;

	return ((Math.pow(Math.E,num) - Math.pow(Math.E,-num))/2);
};
var cosh = function(num){ // to calculate the sinh of a value, (e^value + e ^ -value)/2;
	return ((Math.pow(Math.E,num) + Math.pow(Math.E,-num))/2);

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

	},

	divide:function(numToDivide){

		numToDivide = this.from(numToDivide);
		var divider = (Math.pow(numToDivide.real,2) + Math.pow(numToDivide.img,2));
		var a = this.real;
		var b = this.img;

		return this.returnResult(
			(a * numToDivide.real + b * numToDivide.img) / divider,
			(b * numToDivide.real - a * numToDivide.img) / divider
			);
	},

	conjugate:function(numToConj){
		return this.returnResult(this.real, -this.img);
	},

	magnitude:function(numMagnitude){

		var a = this.real;
		var b = this.img;
		return Math.sqrt(a*a + b*b);
	},

	equals: function(eqNum){

		eqNum = this.from(eqNum);
		return ((eqNum.real == this.real) && (eqNum.img == this.img));

	},

	negate: function(){

		return this.returnResult(-this.real, -this.img);
	},

	angle: function(){
		return Math.atan2(this.img, this.real);
	},

	tan:function(){ //calculate the tangent of complex equation tan(a + bi) = (sin(2*a) + i(sinh2*b)) / (cos(2*a) + (cosh2*b))

		var divider = Math.cos(2*this.real) + cosh(2*this.img);
		real = Math.sin(2*this.real)/divider;
		img= sinh(2*this.img)/divider;

		return this.returnResult( 
			Math.round(real * 1000000000)/1000000000,
			Math.round(img * 1000000000)/1000000000
			);

	},
	sin:function(){ // calculate the sine of complex equation, sin(real+(img)i) = sin(real)cosh(img) + icos(real) sinh(img)

		real = Math.sin(this.real)*cosh(this.img);
		img = Math.cos(this.real)*sinh(this.img);


		return this.returnResult( 
			Math.round(real * 1000000000)/1000000000,
			Math.round(img * 1000000000)/1000000000
			);
	},
	cos:function(){ //calculate the cosine of complex equation, cos(real+(img)i) = cos(real)cosh(img) − i sin(real) sinh (img)

		real = Math.cos(this.real) * cosh(this.img);
		img = -1*(Math.sin(this.real)*sinh(this.img));

		return this.returnResult( 
			Math.round(real * 1000000000)/1000000000,
			Math.round(img * 1000000000)/1000000000
			);
	},
	sinh:function(){ //calculate the hyperbolic sine of complex equation, sinh(a+bi) = sinh(a)cos(b) + i cosh(a)sin(b)

		real = sinh(this.real) * Math.cos(this.img);
		img = cosh(this.real) * Math.sin(this.img);
		return this.returnResult( 
			Math.round(real * 1000000000)/1000000000,
			Math.round(img * 1000000000)/1000000000
			);

	},
	cosh:function(){ //calculate the hyperbolic cosine of complex equation, cosh(a+bi) = cosh(a)cos(b) + i sinh(a)sin(b)

		real = cosh(this.real) * Math.cos(this.img);
		img = sinh(this.real) * Math.sin(this.img);
		return this.returnResult( 
			Math.round(real * 1000000000)/1000000000,
			Math.round(img * 1000000000)/1000000000
			);
	},

	tanh:function(){ //calculate the hyperbolic tan of complex equation tanh(a +_bi) = (sinh(2*a) + sin(2*b)) / (cosh(2*a) + cos(2*b))
		var divider = cosh(2 * this.real) + Math.cos(2 * this.img);
		real = sinh(2*this.real)/divider;
		img= Math.sin(2*this.img)/divider;

		return this.returnResult( 
			Math.round(real * 1000000000)/1000000000,
			Math.round(img * 1000000000)/1000000000
			);

	},

	toPolar:function(){

		return this.magnitude() + ' ' + this.angle();


	},

	toString: function(){
		var string = '';
		var real = this.real;
		var imag = this.img;
		if (real){
			string += real;
		}

		if ((real && imag) || imag < 0) {

			string += imag < 0 ? '-' : '+';

		}

		if (imag){

			var absImg = Math.abs(imag);

			if (absImg != 1) {
				string += absImg;
				string += 'i';
			}else{
				string += 'i';
			}
		}

		return string || '0';
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

