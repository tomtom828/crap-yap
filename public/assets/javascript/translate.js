var transChart = {
	"a":{
		morse: ".-/"
	},
	"b":{
		morse: "-.../"
	},
	"c":{
		morse: "-.-./"
	},
	"d":{
		morse: "-../"
	},
	"e":{
		morse: "./"
	},
	"f":{
		morse: "..-./"
	},
	"g":{
		morse: "--./"
	},
	"h":{
		morse: "..../"
	},
	"i":{
		morse: "../"
	},
	"j":{
		morse: ".---/"
	},
	"k":{
		morse: "-.-/"
	},
	"l":{
		morse: ".-../"
	},
	"m":{
		morse: "--/"
	},
	"n":{
		morse: "-./"
	},
	"o":{
		morse: "---/"
	},
	"p":{
		morse: ".--./"
	},
	"q":{
		morse: "--.-/"
	},
	"r":{
		morse: ".-./"
	},
	"s":{
		morse: ".../"
	},
	"t":{
		morse: "-/"
	},
	"u":{
		morse: "..-/"
	},
	"v":{
		morse: "...-/"
	},
	"w":{
		morse: ".--/"
	},
	"x":{
		morse: "-..-/"
	},
	"y":{
		morse: "-.--/"
	},
	"z":{
		morse: "--../"
	}
}

function translate (data){
	console.log("in the translate funciton");
	console.log(data);
	var dataCollection = data; 
	for(var key in dataCollection){
		//Skip loop if property is from the prototype
		if(!dataCollection.hasOwnProperty(key)) continue;
		//The item within the collection of objects that we are concerning ourselves with this time. 
		var dataItem = dataCollection[key];
		//Each of the properties of the object. 
		console.log(dataItem.author);
		console.log(dataItem.message);
		console.log(dataItem.time);
		//This is what we will return at the end. It should be a string of morse code. 
		var morseTranslation = "";
		//For loop to check the message and loop through the letters within the string. This is where actual translation begins.
		for(var i = 0; i < dataItem.message.length; i++){
			//Grab the letter that we are working with in this loop
			var letter = dataItem.message[i]
			//Make it lowercase so we can check it out in the KVP above. 
			letter = letter.toLowerCase();
			console.log("Letter is: "+letter);
			//If we don't have the letter listed in the chart, it just becomes the same letter. No need to change to morse
			if(transChart[letter] == undefined){
				letter = letter; 
				console.log(letter);
				morseTranslation += letter; 
			}
			//Otherwise, were going to convert to morse. 
			else{
				letter = transChart[letter].morse;
				console.log(letter);
				morseTranslation += letter; 
			}
		}
		return morseTranslation;
	}
}