const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(numbers) {
	return numbers.reduce((sum, number) => sum + number, 0);
};

const multiply = function(numbers) {
  return numbers.reduce((mul, number) => mul * number, 1);
};

const power = function(base, exp) {
	return Math.pow(base, exp);
};

const factorial = function(number) {
  let fac = 1;
	for (number; number > 0; number--) {
    fac *= number;
  }
  return fac;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
