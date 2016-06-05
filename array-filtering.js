var numbers;
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; 
var numbers = numbers.filter(function evenNumbers (number) {
	return number % 2 === 0;
});
console.log([ 2, 4, 6, 8, 10]);
