const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/top3db"
);

const foodSeed = [
    {
    
        food_name: "Pizza",
        food_country: ["Italy"], 
        restaurants: [{
    
            restaurant_name: "Joe's Pizza", 
            yelplink: "https://www.yelp.com/biz/joes-pizza-new-york-4?adjust_creative=zrbTQG2H6KMZT32WKM8iBg&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=zrbTQG2H6KMZT32WKM8iBg", 
            yelpid: "uc5qQMzs96rzjK27epDCug", 
            // googlelink: String, 
            // googleid: String, 
            votes: 0,
            suggested: true,
            editor_pick: true,
            restaurant_details: [{
                latitude: 40.7305599,
                longitude: -74.0021299,
                address: "7 Carmine St",
                city: "New York",
                zipcode: "10014",
                state: "NY",
                phone: "(212) 366-1182"
                }]
            }]
            // type: Schema.Types.ObjectId, ref: 'Restaurant' 
    }
];

db.Food
  .remove({})
  .then(() => db.Food.collection.insertMany(foodSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
