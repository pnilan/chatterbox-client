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
    App.fetch(() => {
      App.stopSpinner();
      Rooms.updateList(RoomsView.render);
      MessagesView.render();
    });

  },
  fetch: function(callback = ()=>{}) {
    Messages.reset();
    Parse.readAll(function(dataResponse, stringResponse) {
      console.log(stringResponse);

      for (var i = dataResponse.length - 1; i >= 0; i--) {
        Messages.addTo(dataResponse[i]);
      }

      callback();

      setTimeout(function() {
        App.fetch(MessagesView.render);
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