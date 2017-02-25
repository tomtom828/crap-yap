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

  console.log(data);

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

    translate(message);

    // Push New Data to Firebase
    database.ref().push({
      author: author,
      time: dateString,
      message: message,
      translation: translate(message)
    });

  });





})