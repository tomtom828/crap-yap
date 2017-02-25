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

function translate (message){
	//This is what we will return at the end. It should be a string of morse code. 
	var morseTranslation = "";
	//For loop that goes through each message and converts to morse. This is where translation occurs.  
	for(var i = 0; i < message.length; i++){
		//Grab the letter that we are working with in this loop
		var letter = message[i]
		//Make it lowercase so we can check it out in the KVP above. 
		letter = letter.toLowerCase();
		//If we don't have the letter listed in the chart, it just becomes the same letter. No need to change to morse
		if(transChart[letter] == undefined){
			letter = letter; 
			morseTranslation += letter; 
		}
		//Otherwise, were going to convert to morse. 
		else{
			letter = transChart[letter].morse;
			morseTranslation += letter; 
		}
	}
	//Return our fully translated phrase. 
	return morseTranslation;
}

function convertToEmoji(data){
	console.log("Data in the convertToEmoji function");
	console.log(data);
	var dataCollection = data; 
	for(var key in dataCollection){
		// skip loop if the property is from prototype
    	if (!dataCollection.hasOwnProperty(key)) continue;
    	//creates a variable called dataItem that corresponds to the item we are concerned with inside dataCollection
    	var dataItem = dataCollection[key];
    	console.log(dataItem.message);
    	var morseCode = dataItem.translation;
    	console.log(morseCode);
    	var poopString = "";
    	for(var i = 0; i < morseCode.length; i++){
    		console.log(dataItem.translation[i]);
    		if(dataItem.translation[i] == "."){
    			poopString += "<i class='em em-hankey'></i>";
    		}
    		else if(dataItem.translation[i] == "-"){
    			poopString += "<i class='em em-toilet'></i>";
    			console.log("Toilet");
    		}
    		else if(dataItem.translation[i] == "/"){
    			poopString += " "
    			console.log("Slash");
    		}
    	}
    	console.log(poopString);
	}
}