'use strict';

var finalArray = [];
var phrase = '';
var wordArray = [];

function toPigLatin(str) {
  return str.replace(/\b(\w)(\S+)\b/g, '$2$1ay');
}

function capitalize(str) {
  if ((str !== str.toLowerCase())) {
    str = str.toLowerCase();
    str = str.replace(/\b\w/, function(letter) {return letter.toUpperCase();});
  }
  return str;
}

phrase = process.argv.slice(2);
console.log("English Phrase: " + phrase);
wordArray = toPigLatin(String(phrase)).split(' ');
wordArray.forEach(function(str) {
  finalArray.push(capitalize(str));
});
console.log("Pig Latin: " + finalArray.join(' '));