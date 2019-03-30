require('dotenv').config()
const yelp = require('yelp-fusion');
const apiKey = process.env.YKEY;

module.exports = {

    loadYelp: (req, res) => {

        const searchRequest = {
            term: 'vezzo',
            location: 'new york, ny',
            limit: 5
            };

        const client = yelp.client(apiKey);

        client.search(searchRequest).then(response => {
            const allResult = response.jsonBody.businesses;
            const prettyJson = JSON.stringify(allResult, null, 4);
            console.log("prettyJson", prettyJson)

            return prettyJson

            }).catch(e => {
                console.log(e);
                });
    }
};