require('dotenv').config()
const yelp = require('yelp-fusion');
const apiKey = process.env.YKEY;


export default {

    loadYelpData: (searchValue) => {

        const searchRequest = {
            term: searchValue,
            location: 'new york, ny',
            limit: 5
            };

        const client = yelp.client(apiKey);

        client.search(searchRequest).then(response => {
            // const firstResult = response.jsonBody.businesses[0];
            // const prettyJson = JSON.stringify(firstResult, null, 4);
            // console.log(prettyJson);
            const allResult = response.jsonBody.businesses;
            const prettyJson = JSON.stringify(allResult, null, 4);

            return prettyJson

            }).catch(e => {
                console.log(e);
                });
    }
};
