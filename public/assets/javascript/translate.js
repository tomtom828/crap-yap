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
	var dataCollection = data; 
	for(var key in dataCollection){
		// skip loop if the property is from prototype
    	if (!dataCollection.hasOwnProperty(key)) continue;
    	//creates a variable called dataItem that corresponds to the item we are concerned with inside dataCollection
    	var dataItem = dataCollection[key];
    	//Accesses the morse code translation from our dataItem.
    	var morseCode = dataItem.translation;
    	//This will eventually be our full emoji string that we will push to the page. 
    	var poopString = "";
    	//Goes through each of the morse code chars in the translation and builds out the poopString. 
    	for(var i = 0; i < morseCode.length; i++){
    		if(dataItem.translation[i] == "."){
    			poopString += "<i class='em em-hankey'></i>";
    		}
    		else if(dataItem.translation[i] == "-"){
    			poopString += "<i class='em em-toilet'></i>";
    		}
    		else if(dataItem.translation[i] == "/"){
    			poopString += "<i class='em em-boom'></i>";
    		}
    		else if(dataItem.translation[i] == " "){
    			poopString += "<b class='em'>"+dataItem.translation[i]+"</b>";
    		}
    		else{
    			poopString += "<b>"+dataItem.translation[i]+"</b>";
    		}
    	}
	$('#messages').prepend("<div class='panel panel-warning'> <div class='panel panel-heading'>"+dataItem.author+" on "+dataItem.time+"</div><div class='panel-body'>"+poopString+"</div></div>");
	}
}