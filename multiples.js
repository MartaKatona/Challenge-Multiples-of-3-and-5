/**
 * sumOfAMultiple() sums of the multiples of 3 and 5 for any number passed in
 * @param  {Number} n Number that is to be used for calculating multiples up to that Number
 * @return {Number}
 */
exports.sumOfAMultiple = function( n ) {
  var sum = 0;
    for (var i = 0; i < n; i++) {
      if ((i%3 === 0) || (i%5 === 0)) {
        sum = sum + i;
        //console.log('add i',i);
      }
    }
  // do your work here
  console.log('sum of 3 or 5 multiply: sum = ', sum);
  return sum;
};

// sumOfAMultiple(10);

