// This object houses all the room _data_ for the app.
// Treat it like a data structure - add methods to interact
// with and manipulate the data.

var Rooms = {

  _data: ['General'],

  _selected: null,

  add: function(room) {
    if (!Rooms._data.includes(room)) {
      Rooms._data.push(room);
    }

    RoomsView.render();
  },

  updateList: function(callback) {
    Rooms._data = [];

    for (var i = 0; i < Messages._data.length; i++) {
      if (!Rooms._data.includes(Messages._data[i].roomname) && (typeof Messages._data[i].roomname === 'string' && Messages._data[i].roomname.length > 0)) {
        Rooms._data.push(Messages._data[i].roomname);
      }
    }

    callback();
  },

  select: function(room) {
    Rooms._selected = room;
  }


};