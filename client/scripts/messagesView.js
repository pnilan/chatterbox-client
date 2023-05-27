// MessagesView is an object which controls the DOM elements
// responsible for displaying messages.

var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    // TODO: Perform any work which needs to be done
    // when this view loads.
    // $(document).on('click', '.submit', handleClick);
  },

  render: function() {
    var data = Messages.retrieveFrom();
    $('#chats').html('');
    for (var i = 0; i < data.length; i++) {
      var msg = MessageView.render(data[i]);
      $('#chats').append(msg);
    }
  },

  renderMessage: function(message) {
    var msg = MessageView.render(message);
    $('#chats').prepend(message);
  },

  handleClick: function(event) {
    // TODO: handle a user clicking on a message
    // (this should add the sender to the user's friend list).
    // $(document).on('click', '.submit', function() {
    //   renderMessage(message);
    // });
  }

};


