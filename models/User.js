var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new UserSchema object
// This is similar to a Sequelize model
var UserSchema = new Schema({
  
    name: { type: String, required: true },
    email: { type: String, required: true },
    votes: { type: Boolean, required: false },
    date: { type: Date, default: Date.now },
    // `note` is an object that stores a Note id
    // The ref property links the ObjectId to the Note model
    // This allows us to populate the Article with an associated Note
    favorite_food_restaurant: {
        type: Schema.Types.ObjectId,
        ref: "Food"
    }
        
});

// This creates our model from the above schema, using mongoose's model method
var User = mongoose.model("User", UserSchema);

// Export the User model
module.exports = User;
