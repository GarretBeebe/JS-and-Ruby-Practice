'use strict';
var _ = require('underscore');
var multiples = [];
var range = [];
var rangeEnd;

rangeEnd = process.argv.slice(2);
range = _.range(0,rangeEnd, 1);

range.forEach(function(number){
	if ((number % 3 == 0) || (number % 5 == 0)) {
		multiples.push(number);
	}
})

var sum = _.reduce(multiples, function(memo, num){ return memo + num; }, 0);
console.log('The sum of multiples of 3 and 5 between 0 and ' + rangeEnd + ' is ' +sum);