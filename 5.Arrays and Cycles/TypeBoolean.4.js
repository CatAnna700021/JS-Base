let numbers = [0,1,2,3,0,5,6,0,7,8,9,0];
var numberToBoolean = [];
for(let i = 0; i < numbers.length; i++){
 numberToBoolean[i] = Boolean(numbers[i]);
};
console.log(numberToBoolean);