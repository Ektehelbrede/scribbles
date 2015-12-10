/*
Multiples of 3 and 5

If we list all the natural numbers below 10 that are multiples of 3 or 5,
we get 3, 5, 6, and 9. The sum of these multiples is 23.

Find the sum of all the multiples of 3 or 5 below 1000.
*/

var countTo = 1000;
var multiple1 = 3;
var multiple2 = 5;
var sumOfMultiples = 0;

for (var i = 0; i < countTo; i++)
{
  if ((i % multiple1 === 0) || (i % multiple2 === 0))
  {
    sumOfMultiples += i;
  }
}

console.log("The sum of all the multiples of " + multiple1 + " or " + multiple2
  + " below " + countTo + " is: " + sumOfMultiples + ".");
