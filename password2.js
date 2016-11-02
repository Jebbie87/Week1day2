var pass = "abracadabraeeeelllloooo";

function obfuscator(word) {
  var sentence =
    word.replace(/a/g, '4')
    .replace(/e/g, '3')
    .replace(/l/g, '1')
    .replace(/o/g, '0');
  return sentence;
}

console.log(obfuscator(pass));