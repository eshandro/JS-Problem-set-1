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
	console.log((string.split(" ")).length);
	return (string.split(" ")).length;
}
wordCount("word1 word2");