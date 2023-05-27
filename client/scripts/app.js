// This App object represents the Chatterbox application.
// It should initialize the other parts of the application
// and begin making requests to the Parse API for data.

var App = {

  $spinner: $('.spinner img'),

  username: 'anonymous',

  initialize: function() {
    App.username = window.location.search.substr(10);

    FormView.initialize();
    RoomsView.initialize();
    MessagesView.initialize();


    // Fetch initial batch of messages
    App.startSpinner();
    App.fetch();


    // ==Steps to Complete==
    // Continually invoke App.fetch to receive other users' posts
    // Push returned data to messagesView?

  },
  fetch: function(callback = ()=>{}) {
    Messages.reset();
    Parse.readAll(function(dataResponse, stringResponse) {
      console.log(stringResponse);
      //invoke a message method to add to data structure
      for (var i = dataResponse.length - 1; i >= 0; i--) {
        Messages.addTo(dataResponse[i]);
      }
      MessagesView.render();
      App.stopSpinner();

      setTimeout(function() {
        App.fetch();
      }, 5000);
    });
  },

  startSpinner: function() {
    App.$spinner.show();
    FormView.setStatus(true);
  },

  stopSpinner: function() {
    App.$spinner.fadeOut('fast');
    FormView.setStatus(false);
  }
};