module.exports = function fizzBuzz(val) {
  // > Your code here <
  if (val % 15 === 0) 
    return 'fizzbuzz';
  else if (val % 3 === 0) 
    return 'fizz';
  else if (val % 4 === 0)
    return 'buzz';
  else return val
  } 
  
