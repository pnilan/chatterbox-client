// This object houses all the message _data_ for the app.
// Treat it like a data structure - add methods to interact
// with and manipulate the data.

var Messages = {

<<<<<<< HEAD
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
=======
  // TODO: Define how you want to store your messages.
  _data: [],
  // TODO: Define methods which allow you to retrieve from,
  // add to, and generally interact with the messages.
>>>>>>> e395d52b89a95100704eb3bdd3f3b937ab0a233d

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






