// remove .hidden and print results

// need to declare the userText variable globally
var userText;
var textArray;
var totalWordCount;
var uniqueWordCount;
var averageWordLength;

$('button').click(function(event){
	event.preventDefault();

	// need to assign value to userText variable
	// textarea is not actually a form field
	// jquery treats it as one
	// so we need to use .val() instead of .text()
	userText = $('textarea').val();
	textArray = userText.split(' ');
	getTotalWordCount();
	getUniqueWordCount();
	getAverageWordLength();
	$('.hidden').removeClass('hidden');
}); // semi-colon after closing parens

// get, handle, or fnc are common function prefixes
function getTotalWordCount(){
	$('.total-word-count').text(textArray.length);
} // no semi-colon after *final* closing curly brace

function getUniqueWordCount(){
	var uniqueTextArray = [textArray[0]];

	for(i=0; i<textArray.length; i++){
		var isUnique = true;
		// console.log('i', textArray[i]);
		for(j=0; j<uniqueTextArray.length; j++){
			if(textArray[i] == uniqueTextArray[j]){
				isUnique = false;
			}
			// console.log('j', uniqueTextArray[j]);
			console.log( `comparing ${textArray[i]} to ${uniqueTextArray[j]}` );
		}
		if(isUnique){
			uniqueTextArray.push(textArray[i]);
		}
	}
	
	$('.unique-word-count').text(uniqueTextArray.length);

	// ES6 - set syntax and spread operator
	// spread operator is ...
	// var uniqueArr = [ ...new Set(textArray) ]
}

function getAverageWordLength(){
	var totalCharacters = 0;
	for(i=0; i<textArray.length; i++){
		totalCharacters += textArray[i].length;
	}
	totalCharacters = totalCharacters / textArray.length;
	$('.average-word-length').text(totalCharacters);
}

// can console.log any object using $ selector
// console.log($('button'));