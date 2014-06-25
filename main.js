var letterCapitalize = function(string) {
	var splitString = string.split(" ");
	var capitalized = []
	for(i=0; i < splitString.length; i++) {
		var firstLetterCap = (splitString[i].charAt(0)).toUpperCase();
		var restOfWord = splitString[i].slice(1);
		var combinedWord = firstLetterCap + restOfWord;
		capitalized.push (combinedWord);
	}
	return capitalized;
}
// letterCapitalize("word1 word2 word3 word4");

var wordCount = function(string) {
	return (string.split(" ")).length;
}
// wordCount("word1 word2");

var primeTime = function(number) {
	if (number === 2 || number === 3) {
		return true;
	}	
	if (number < 2 || number % 2 === 0 || number % 3 === 0) {
		return false
	}
	
	for(i=5; i <= number/2; i+=2) {
		if (number % i === 0) {
			return false
		}
	}
	return true
}

// console.log(primeTime(31));