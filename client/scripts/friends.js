// This object houses all the friend _data_ for the app.
// Treat it like a data structure - add methods to interact
// with and manipulate the data.

var Friends = {

  _data: [],

  add: function(friend) {
    if (!Friends._data.includes(friend)) {
      Friends._data.push(friend);
    }
  },

  reset: function() {
    Friends._data = [];
  }


};