#COMPLEX NUMBER LIBRARY

Complex
=======

Complex is a libary that deals with Complex Numbers in JavaScript. It
provides several methods ranging from add, multiply numbers as well as calculate the
magnitude and angle(rad) in the complex plane. A complex number is a number that can be expressed in the form a + bi, where a and b are real numbers and i is the imaginary unit which satisfies the equation i^2 = −1.

![alt tag](https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Complex_number_illustration.svg/220px-Complex_number_illustration.svg.png)

Application of Complex Equations
--------------------------------
Complex numbers have essential concrete applications in a variety of scientific and related areas such as signal processing, control theory, electromagnetism, fluid dynamics, quantum mechanics, cartography, and vibration analysis.

#### Control theory
In control theory, systems are often transformed from the time domain to the frequency domain using the Laplace transform. The system's poles and zeros are then analyzed in the complex plane. The root locus, Nyquist plot, and Nichols plot techniques all make use of the complex plane.

In the root locus method, it is especially important whether the poles and zeros are in the left or right half planes, i.e. have real part greater than or less than zero. If a linear, time-invariant (LTI) system has poles that are

in the right half plane, it will be unstable,
all in the left half plane, it will be stable,
on the imaginary axis, it will have marginal stability.
If a system has zeros in the right half plane, it is a nonminimum phase system.

#### Signal analysis
Complex numbers are used in signal analysis and other fields for a convenient description for periodically varying signals. For given real functions representing actual physical quantities, often in terms of sines and cosines, corresponding complex functions are considered of which the real parts are the original quantities. For a sine wave of a given frequency, the absolute value | z | of the corresponding z is the amplitude and the argument arg(z) is the phase.

If Fourier analysis is employed to write a given real-valued signal as a sum of periodic functions, these periodic functions are often written as complex valued functions of the form

![alt tag](https://wikimedia.org/api/rest_v1/media/math/render/svg/651a6be82d6764e4b48320cdd4259ab8af48b1f2)

and

![alt tag](https://wikimedia.org/api/rest_v1/media/math/render/svg/ee5a1f16e771f3403dad48e5ecde41e2c462a84a)

where ω represents the angular frequency and the complex number A encodes the phase and amplitude as explained above.

This use is also extended into digital signal processing and digital image processing, which utilize digital versions of Fourier analysis (and wavelet analysis) to transmit, compress, restore, and otherwise process digital audio signals, still images, and video signals.[Wikipedia](https://en.wikipedia.org/wiki/Complex_number#Applications)

Node
----

You can get this package with NPM:

    npm install complex_number_library

```js
var Complex = require('complex');
console.log(new Complex(3, 4).abs()); // 5 the absolute value of 3+4i
```

Testing
-------

Testing is done with Mocha and Expect.js:

	# install dependencies
	```
	npm install
	```
	# run the tests in node
	```
	./node_modules/.bin/mocha ./lib/complex.js
	```

API Documentation
-----------------

### Complex constructor: //complex numbers are in format z = x+iy

```js
var complex = new complex(real, img);
```

#### Arguments:

1. real (number) the real part of the complex equation
2. img (number) the imaginary part of the complex equation


### Function: Complex.prototype.newDeclare

It helps create a valid complex instance for manipulation

```js
var z = complex.newDeclare(real, img);
```

#### Arguments:

1. real (number) the real part of the number
2. img (number) the imaginary part of the number

#### Examples:

```js
var z = Complex.newDeclare(2, 4);
var z = Complex.newDeclare(5);
```


### Method: returnResult

Sets the real and imaginary properties a and b from `a + bi`

```js
Complex.returnResult(real, img);
```

#### Arguments:

1. real (number) the real part of the number
2. img (number) the imaginary part of the number



### Method: magnitude

Calculates the magnitude of the complex number
Magnitude is the square root of the square of the total of the real and img values

```js
myComplex = new complex(3,4);
myComplex.magnitude(); //equates to 5
```


### Method: angle

Calculates the angle with respect to the real axis i.e x-axis, in radians.

```js
myComplex = new complex(0,1);
myComplex.angle(); // equates to PI/2
```


### Method: conjugate

Calculates the conjugate of the complex number (multiplies the imaginary part by -1)

```js
myComplex = new complex(2,1); // complex equation 2+i
myComplex.conjugate(); // equates to 2-i
```


### Method: negate

Negates the number (multiplies both the real and imaginary part with -1)

```js
myComplex = new complex(2,1); // complex equation 2+i
myComplex.negate(); // equates to -2-i
```


### Method: multiply

Multiplies the number with a real or another complex equation

```js
myComplex = new complex(2,1); // complex equation 2+i
myComplex.multiply(z); 
```


### Method: divide

Divides the number by a real or another complex equation

```js
myComplex = new complex(2,1); // complex equation 2+i
myComplex.divide(z);
```


### Method: add

Adds a real or complex equation

```js
myComplex = new complex(2,1); // complex equation 2+i
myComplex.add(z);
```


### Method: sub

Subtracts a real or complex equation

```js
myComplex = new complex(2,1); // complex equation 2+i
myComplex.sub(z); // argument z can be a real number or a complex equation
```


### Method: sqrt

Returns the square root of a complex equation

```js
myComplex = new complex(1,4); // complex equation 1+4i
myComplex.sqrt(); // equates to '1.60048518+1.249621068i'
```


### Method: log

Returns the natural logarithm (base `E`) of a complex equation

```js
myComplex = new complex(4,3); // complex equation 4+3i
myComplex.log([Value]); // for myComplex.log()equates to '1.609437912+0.643501109i' 
```

#### Arguments:

Log[w] = Log[|w|]+I*(Arg[w]+2*Pi*k), 
for any integer k:

Log[|w|] = real part

(Arg[w]+2*Pi*k) = imaginary part

1. principalValue (number) For one complex value , there are infinitely many logarithms, because we can choose any integer as the Value! So it is clearly not like the real logarithm. Complex logarithm-simplifications can be made by forcing Arg[w] to be in the interval [-Pi,Pi] and always taking k = 0.


### Method: exp

Calculates the `e^z` exponential of a complex equation. where z is the complex equation.

```js
myComplex = new complex(4,3); // complex equation 4+3i
myComplex.exp(); // equates to '-54.051758861+7.704891373i'
```


### Method: sin

Calculates the sine of a complex equation

```js
myComplex = new complex(1,2); // complex equation 1+2i
myComplex.sin(); // equates to '3.165778513+1.959601041i'
```


### Method: cos

Calculates the cosine of a complex equation

```js
myComplex = new complex(1,2); // complex equation 1+2i
myComplex.cos(); // equates to '2.032723007-3.051897799i'
```


### Method: tan

Calculates the tangent of  a complex equation

```js
myComplex = new complex(1,2); // complex equation 1+2i
myComplex.tan(); // equates to '0.033812826+1.014793616i'
```


### Method: sinh

Calculates the hyperbolic sine of  a complex equation

```js
myComplex = new complex(1,2); // complex equation 1+2i
myComplex.sinh(); // equates to '-0.489056259+1.403119251i'
```


### Method: cosh

Calculates the hyperbolic cosine of a complex equation

```js
myComplex = new complex(1,2); // complex equation 1+2i
myComplex.cosh(); // equates to '-0.642148125+1.068607421i'
```


### Method: tanh

Calculates the hyperbolic tangent of a complex equation

```js
myComplex = new complex(1,2); // complex equation 1+2i
myComplex.tanh(); //'1.166736257-0.243458201i'
```

### Method: toPolar

Converts a complex equation to polar form.

```js
myComplex = new complex(1,1); // complex equation 2+i
myComplex.toPolar(); // result gives '1.4142135623730951 0.7853981633974483'
```


### Method: toString

Returns a string representation of a complex equation

```js
myComplex = new complex(2,1); // complex equation 2+i
myComplex.toString(); // returns in string form 2+i
```


#### Examples:

```js
new complex(1, 2).toString(); // 1+2i
new complex(0, 1).toString(); // i
new complex(4, 0).toString(); // 4
new complex(1, 1).toString(); // 1+i
'my Complex Number is: ' + (new complex(3, 5)); // 'my Complex Number is: 3+5i
```


### Method: Equals

Checks if the real and imaginary components are equal to the passed in compelex components.

```js
myComplex.equals(z);
```

### Arguments:

1. z is the complex number/equation to compare with

### Examples:

```js
new complex(5, 4).equals(new complex(5, 4)); // true
new complex(1, 4).equals(new complex(1, 3)); // false
```

## MIT License

Copyright (c) 2016 Tomilayo Israel

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies
of the Software, and to permit persons to whom the Software is furnished to do
so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.



