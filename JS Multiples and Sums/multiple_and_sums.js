'use strict';
var _ = require('underscore');
var range = _.range(0,10, 1);
var multiples = [];

range.forEach(function(number){
	if ((number % 3 == 0) || (number % 5 == 0)) {
		multiples.push(number);
	}
})

var sum = _.reduce(multiples, function(memo, num){ return memo + num; }, 0);
console.log(sum);