import axios from "axios";

// require('dotenv').config()
// const yelp = require('yelp-fusion');
// const apiKey = process.env.YKEY;

export default {
    loadYelpData: function(restaurant) {
        return axios.get("/api/food/" + restaurant);
    }
};

// export default {

// loadYelpData: (restaurant) => {

//     const searchRequest = {
//       term:restaurant,
//       location: 'new york, ny',
//       limit: 10
//     };
    
//     const client = yelp.client(apiKey);
    
//     client.search(searchRequest).then(response => {
//       // const firstResult = response.jsonBody.businesses[0];
//       // const prettyJson = JSON.stringify(firstResult, null, 4);
//       // console.log(prettyJson);
//       const allResult = response.jsonBody.businesses;
//       const prettyJson = JSON.stringify(allResult, null, 4);
//       console.log(prettyJson);

//       return axios.get("/api/yelp/" + name);

//     }).catch(e => {
//       console.log(e);
//     });
//   }

// };

// export default {

//     loadYelpData: (restaurant) => {
//         return axios.get("https://api.yelp.com/v3/businesses/search", {
//             headers: {
//                Authorization: apiKey
//             },
//             params: {
//                 term: restaurant,
//                 location: 'new york, ny',
//                 limit: 5
//             }
//             .then((res) => {
//                 console.log(res)
//                })
//                .catch((err) => {
//                 console.log ('error')
//                })

//             })

//     }

// };


