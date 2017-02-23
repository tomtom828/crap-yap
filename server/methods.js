import { Meteor } from 'meteor/meteor';

Meteor.methods({

  // Add Message to Database
  addMessage(text) {
    Message.insert({
      content: text
    }, function(err, res) {
      if (err) {throw err}
    })
  },

  // Get all Messages from Database
  getAllMessages(){
    var allMessages = Message.find({}).fetch();
    return allMessages;
  }

})