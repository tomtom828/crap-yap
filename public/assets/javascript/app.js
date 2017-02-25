// Import Sound Effects
var fartSound = new Audio('/assets/sounds/fart.mp3');
var toiletSound = new Audio('/assets/sounds/toilet.mp3');

// Initialize Firebase
var config = {
    apiKey: "AIzaSyDe5w4ynuTZh6PEhJZMGmhX1NjFWy3-BXE",
    authDomain: "crapper-yapper.firebaseapp.com",
    databaseURL: "https://crapper-yapper.firebaseio.com",
    storageBucket: "crapper-yapper.appspot.com",
    messagingSenderId: "521364655320"
  };
firebase.initializeApp(config);

// Declare DB Variable
var database = firebase.database();


// Firebase DB was Updated
database.ref().on("value", function(snapshot) {
  
  // Collect updated Firebase Data
  data = snapshot.val();

  // Clear console and then log recent Data
  console.clear();
  console.log(data);

  // Convert and Append all Emoji Poo Code
  convertToEmoji(data);

});


// Wait for Page to Load for jQuery
$(document).ready(function(){

  // Submit Button Click Listner
  $('#submitButton').on('click', function(){

    // Get Author Name and Message
    var message = $('#messageBox').val().trim();
    var author = $('#nameBox').val().trim();

    // Get Date
    var dateString = moment().format('MMMM Do YYYY, h:mm:ss a').toString();

    // Prevent Empty Submissions
    if(author == ""){
      alert('Hey Sh*thead, add your name!');
      return;
    }
    else if(message == ""){
      alert('Hey Sh*thead, add a message!');
      return;
    }

    // Push New Data to Firebase
    database.ref().push({
      author: author,
      time: dateString,
      message: message,
      translation: translate(message)
    });

  });


  // Speak Button (Translate Morse Code to Sound)
  $(document).on('click', '.speakButton', function(){

    // Get the Morris Code Message from DOM data
    var translationString = $(this).data('message');

    // Split Sound String
    var translationArray = translationString.split('');

    // Remove anything that's not a '.' or '-' or '/'
    var messageArray = [];
    for(var i=0; i<translationArray.length; i++){
      if(translationArray[i] == '.' || translationArray[i] == '-' || translationArray[i] == '/'){
        messageArray.push(translationArray[i]);
      }
    }

    // Loop through Message and Play Sounds
    for(var i=0; i<messageArray.length; i++){

      // Magical Code to have Sounds Wait...
      // http://stackoverflow.com/questions/24293376/javascript-for-loop-with-timeout
      (function(ind) {
         setTimeout(function(){
          // Play Fart
          if(messageArray[ind] == '.'){
            fartSound.play();
          }

          // Play Toilet
          else if(messageArray[ind] == '-'){
            toiletSound.play();
          }
        }, 1000 + (1000 * ind));
      })(i);

    }

  });

});