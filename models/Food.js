var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new UserSchema object
// This is similar to a Sequelize model
var FoodSchema = new Schema({
    food_name: String,
    food_country: [{ type: String }], 
    restaurants: [{
        
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
        // type: Schema.Types.ObjectId, ref: 'Restaurant' 
        }]

}, {collection: 'Food'});

// This creates our model from the above schema, using mongoose's model method
var Food = mongoose.model("Food", FoodSchema);

// Export the User model
module.exports = Food;
