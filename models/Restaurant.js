var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new UserSchema object
// This is similar to a Sequelize model
var RestaurantSchema = new Schema({
  
    restaurant_name: String, 
    yelplink: String, 
    yelpid: String, 
    googlelink: String, 
    googleid: String, 
    votes: Number,
    suggested: Boolean,
    editor_pick: Boolean,
    restaurant_details: [{
        latitude: Number,
        longitude: Number,
        address: String,
        city: String,
        zipcode: String,
        state: String,
        phone: String
    }]

});

// This creates our model from the above schema, using mongoose's model method
var Restaurant = mongoose.model("Restaurant", RestaurantSchema);

// Export the User model
module.exports = Restaurant;
