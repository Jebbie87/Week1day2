/*
Given a sentence with blank spaces
I'd like to run a program that takes words an inserts them in
the sentence so I can have a laugh.

Sentence:
I brought my ___ to the ___ so that I could get ___.

Tasks:
- Figure out how to read arguments frmo the command line
- How to put words in the sentence?
  - split the sentence into parts
  - add the words
*/

// Whenever I have a madlib, the length of the splitted madlib
// will be the number of blank spaces + 1
//function buildMadlib(madlib, words) {

var madlib = "I bought my ___ to the ___ so that I could get ___.";
var words = process.argv.slice(2);

var splittedMadlib = madlib.split('___');
console.log(splittedMadlib);
var sentence = '';

for (var c = 0; c < words.length; c++) {
  sentence += splittedMadlib[c];
  sentence += words[c];
}
sentence += splittedMadlib[splittedMadlib.length -1];
// return sentence;
// }

//node madlibs.js dog underworld coffee
//var sentence = part1 + words[0] + part2 + words[1] + part3 + words[2] + ".";

console.log(sentence);

/*
var arr = [1, 2, 3, 4, 5, 6];
//gets first two items
arr.slice(2);
var words = process.argv.slice(2);
console.log(words);

*/