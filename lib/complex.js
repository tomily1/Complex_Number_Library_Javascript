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

	tan:function(){ //calculate the tangent of complex equation tan(a+bi) = sin(a+bi)/cos(a+bi)

	},
	sine:function(){ // calculate the sine of complex equation, sin(real+(img)i)=sin(real)cosh(img)+icos(real) sinh(img)

	},
	cos:function(){ //calculate the cosine of complex equation, cos(real+(img)i) = cos(real)cosh(img) − i sin(real) sinh (img)


	},
	sinh:function(){ //calculate the hyperbolic sine of complex equation

	},
	cosh:function(){ //calculate the hyperbolic cosine of complex equation

	},
	tanh:function(){ //calculate the hyperbolic tan of complex equation

	},

	toPolar:function(){

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

var sinh = function(num){

};
var cosh = function(num){

};


module.exports = complex;

