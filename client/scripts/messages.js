// This object houses all the message _data_ for the app.
// Treat it like a data structure - add methods to interact
// with and manipulate the data.

var Messages = {

  _data: [],

  retrieveFrom: function(callback = ()=>{}) {
    return Messages._data;
  },

  addTo: function(message) {
    Messages._data.unshift(message);
  },

  reset: function() {
    Messages._data = [];
  }

};