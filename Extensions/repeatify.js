'use strict';

String.prototype.repeatify = function(times) {
  var str = '';
  for (var i=0; i < times; i++) {
    str += this
  }
  console.log(str);
}

"hello".repeatify(3)
