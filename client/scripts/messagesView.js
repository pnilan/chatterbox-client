// MessagesView is an object which controls the DOM elements
// responsible for displaying messages.

var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    // TODO: Perform any work which needs to be done
    // when this view loads.
  },

  render: function(room) {
    var data = Messages.retrieveFrom();
    $('#chats').html('');
    for (var i = 0; i < data.length; i++) {
      if (room && data[i].roomname !== Rooms._selected) {
        continue;
      }
      var msg = MessageView.render(data[i]);
      $('#chats').append(msg);
      var username = data[i].username;
      $('.' + data[i].username).on('click', {username: username}, MessagesView.handleClick);

      if (Friends._data.includes(username)) {
        $('.' + data[i].username).addClass('friend');
      }
    }
  },

  renderMessage: function(message) {
    var msg = MessageView.render(message);
    console.log(msg);
    $('#chats').prepend(message);
  },

  handleClick: function(event, username) {
    event.preventDefault();
    Friends.add(event.data.username);
    $('.' + event.data.username).addClass('friend');
  }

};


