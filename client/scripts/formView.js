// FormView is an object which houses all the message form functionality.
// Consider the provided code and complete the functionality.
// Apply what you learn here to other interactive views if necessary.

var FormView = {

  $form: $('form'),

  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);
  },

  handleSubmit: function(event, callback) {

    event.preventDefault();
    var params = new URLSearchParams(document.location.search);
    var username = params.get('username');

    var message = {};
    message.username = username;
    message.text = $('#message').val();
    message.roomname = 'Global';

    Parse.create(message, (data, string) => {
      $('#message').val('');
      console.log(string);
      Messages.addTo(data);
      Rooms.add(data.roomname);
      RoomsView.render();
    });
  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};