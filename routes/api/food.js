const router = require("express").Router();
const foodController = require("../../controllers/foodController");

// var yelp = require('yelp-fusion');
// var yelpClient = yelp.client(process.env.YKEY);
// var googleplacesapi = require('googleplacesapi');

// Matches with "/api/food"
router.route("/")
  .get(foodController.findAll)
//   .post(foodController.create);



// Matches with "/api/food/:food_name_short"
router
  .route("/:food_name_short")
  .get(foodController.findByName)
  // .put(foodController.update)
  // .delete(foodController.remove);


// Matches with "/api/food/:id"
router
  .route("/:id")
  .get(foodController.findById)
  .put(foodController.update)
  .delete(foodController.remove);




// Testing Yelp and Google
// router
//     .post("/search", function (req, res) {

//         var searchTerm = req.body.searchTerm;
//         var location = req.body.location.toString();
//         var allData = {};

//     // Yelp:
//     yelpClient.search({
//             term: searchTerm,
//             location: location
//         }).then(function (response) {
//             var allYelpData = response.jsonBody.businesses;
//             allYelpData = allYelpData.sort(function (a, b) {
//                 return b.rating - a.rating;
//         });

//         var yelpData = allYelpData[0];

//         allData.yelpData = {
//             id: yelpData.id,
//             name: yelpData.name,
//             image_url: yelpData.image_url,
//             location: yelpData.location.address1 + ", " + yelpData.location.city + ", " + yelpData.location.zip_code,
//             phone: yelpData.display_phone,
//             rating: yelpData.rating,
//             yelp_review_count: yelpData.review_count
//         };

//         //Google:
//         var gpa = new googleplacesapi({
//             key: process.env.GKEY
//         });

//         gpa.search({
//             query: yelpData.name,
//             location: location.toString()
//         }, function (err, data) {
//             if (!err) {
//                 if (data.results.length > 0) {
//                     var googleData = data.results[0];

//                     allData.googleData = {
//                         id: googleData.id,
//                         name: googleData.name,
//                         rating: googleData.rating,
//                         open: googleData.opening_hours.open_now,
//                         price_range: googleData.price_level,
//                         google_review_count: googleData.user_ratings_total
//                     }

//                     allData.trueReview = {
//                         trueRating: ((allData.yelpData.rating + googleData.rating) / 2),
//                         total_review_count: (allData.yelpData.yelp_review_count + googleData.user_ratings_total)
//                     }
//                 } else {
//                     allData.trueReview = {
//                         trueRating: allData.yelpData.rating,
//                         total_review_count: allData.yelpData.yelp_review_count
//                         }
//                     }
//                 };
//             });
//         });
// });

module.exports = router;
