// RoomsView is an object which controls the DOM elements
// responsible for displaying and selecting rooms.

var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    // TODO: Perform any work which needs to be done
    // when this view loads.
    RoomsView.render();
    $('select').on('change', { room: $('select').val() }, RoomsView.handleChange);

  },

  render: function() {
    for (var i = 0; i < Rooms._data.length; i++) {
      $('select').append('<option value="' + Rooms._data[i] + '">' + Rooms._data[i] + '</option>');
    }
  },

  renderRoom: function(roomname) {
    // TODO:
  },

  //CONTROLLER CODE
  //CONTROLLER CODE
  handleChange: function(event) {
    console.log(event.data.room);
    Rooms.select(event.data.room);
  },

  handleClick: function(event) {
    // TODO: Handle the user clicking the "Add Room" button.


  }

};
