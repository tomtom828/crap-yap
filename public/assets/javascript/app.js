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

  translate(data);
});


// Wait for Page to Load for jQuery
$(document).ready(function(){



  // Submit Button Click Listner
  $('#submitButton').on('click', function(){

    // Get User Name and Message
    var message = $('#messageBox').val();

    // Get Date
    var today = new Date();
    var thisMonth = today.getMonth() + 1;
    var thisDate = today.getDate();
    var thisYear = today.getFullYear();

    var thisTime = today.toTimeString()

      // Create a String from the Date 
    var dateString = "";
    var dateString = dateString.concat(thisMonth, "/", thisDate, "/", thisYear, " - ", thisTime);

    // Push New Data to Firebase
    database.ref().push({
      author: "Somebody",
      time: dateString,
      message: message
    });

  })





})