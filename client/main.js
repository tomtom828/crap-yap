import { Template } from 'meteor/templating';
// import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

// Template.allMessageView.onCreated(function helloOnCreated() {
//   this.messages = [];
// });

Template.allMessageView.helpers({
  messages() {
    //return Template.instance().messages.get();
    Meteor.call('getAllMessages', function(err, res){
      console.log(res);
      return {entries: res};
    });
  },
});

Template.addMessageForm.events({
  'submit form'(event, instance) {

    // Prevent Form Action
    event.preventDefault();

    // Get Message
    var message = event.target.userMessage.value;
    console.log(message);

    // Submit Message to Database
    Meteor.call('addMessage', message, function(err, res){
      console.log('Submitted Message!')
    });

  },
});
