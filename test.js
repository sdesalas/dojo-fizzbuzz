var assert = require('assert');
var fizzbuzz = require('./fizzbuzz')

assert.equal("fizz", fizzbuzz(3), 'Should return fizz (3)');
assert.equal("fizz", fizzbuzz(6), 'Should return fizz (6)');
assert.equal("fizz", fizzbuzz(18), 'Should return fizz (18)');
assert.equal("buzz", fizzbuzz(5), 'Should return buzz (5)');

assert.equal("buzz", fizzbuzz(10), 'Should return buzz (10)');
assert.equal("buzz", fizzbuzz(25), 'Should return buzz (25)');

assert.equal("fizzbuzz", fizzbuzz(15), 'Should return fizzbuzz (15)');

assert.equal("fizzbuzz", fizzbuzz(30), 'Should return fizzbuzz (30)');
assert.equal("fizzbuzz", fizzbuzz(150), 'Should return fizzbuzz (150)');

assert.equal("2", fizzbuzz(2), 'Should return 2');
assert.equal("8", fizzbuzz(8), 'Should return 8');
assert.equal("52", fizzbuzz(52), 'Should return 52');

