import axios from "axios";

export default {
  // Gets all food
  getFoods: function() {
    return axios.get("/api/food");
  },
  getFoodByName: function(name) {
    return axios.get("/api/food/" + name);
  },
  // Gets the book with the given id
  getFoodById: function(id) {
    return axios.get("/api/food/" + id);
  },

  // Deletes the book with the given id
  deleteBook: function(id) {
    return axios.delete("/api/food/" + id);
  },
  // Saves a book to the database
  saveBook: function(bookData) {
    return axios.post("/api/food", bookData);
  }
};
