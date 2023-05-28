// FormView is an object which houses all the message form functionality.
// Consider the provided code and complete the functionality.
// Apply what you learn here to other interactive views if necessary.

var FormView = {

  $form: $('form'),

  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);
  },

  handleSubmit: function(event) {
    // Stop the browser from submitting the form
    // TODO: Currently, this is all handleSubmit does.
    // Make this function actually send a message to the Parse API.

    // var message = {
    //   username: 'shawndrost',
    //   text: 'trololo',
    //   roomname: '4chan',
    // };

    //create message object to
    //message.username = ...
    //message.text = ...
    //message.roomname = ...
    //apply the Parse.create to send message to server
    //event.preventDefault()
    console.log(event);
    var params = new URLSearchParams(document.location.search);
    var username = params.get('username');
    var message = {};
    message.username = username;
    // message.username = 'Patrick & Andy';
    // message.text = $('#message').value();
    message.text = document.getElementById('message').value;
    message.roomname = 'Patrick & Andy\'s Room';

    Parse.create(message, (data, string) => {
      console.log(string);
    });
    event.preventDefault();

  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};
console.log(FormView.handleSubmit(event));