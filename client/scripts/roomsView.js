// RoomsView is an object which controls the DOM elements
// responsible for displaying and selecting rooms.

var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    // TODO: Perform any work which needs to be done
    // when this view loads.
  },

  render: function() {
    // TODO: Render out the list of rooms.
  },

  renderRoom: function(roomname) {
    // TODO: Render out a single room.
    const unOrderedList = document.createElement('ul');
    const list = document.createTextNode(message.roomname);
    unOrderedList.appendChild(list);
    const iDee = document.getElementById('roomname');
    iDee.appendChild(list);
  },

  //CONTROLLER CODE
  handleChange: function(event) {
    // TODO: Handle a user selecting a different room.
  },

  handleClick: function(event) {
    // TODO: Handle the user clicking the "Add Room" button.

  }

};
