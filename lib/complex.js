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

	}

	

};

complex.prototype.from = function(real, img){
		if (real instanceof complex){ return new complex(real.real, real.img)};
		real = +real;
		img = +img;
		return new complex(isNaN(real) ? 0 : real, isNaN(img) ? 0 : img);
	}
/*var extend = {

	from:function(real, img){
		if (real instanceof complex){ return new complex(real.real, real.img)};
		real = +real;
		img = +img;
		return new complex(isNaN(real) ? 0 : real, isNaN(img) ? 0 : img);
	},

	fromPolar: function(r, phi){
		return new complex(1, 1).fromPolar(r, phi);
	}

};
for (var e in extend) complex[e] = extend[e];*/



module.exports = complex;

