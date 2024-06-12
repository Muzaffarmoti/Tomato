const connectdb = require('./connectdb');
const axios =require('axios');
// Retrieve all the columns from the number collection
const unique_cities = async (clients) => {
    try {
        // Connect to the database
        clients = await connectdb(clients);
        console.log('Connected to the database');

        const db = clients.db('mini');
        const pipeline = [
            { $group: { _id: "$city" } },
            { $group: {
              _id: null,
              uniqueCities: { $addToSet: "$_id" },
              uniqueCitiesCount: { $sum: 1 }
            }},
            { $project: {
              _id: 0,
              uniqueCities: 1,
              uniqueCitiesCount: 1
            }}
          ];
        // Retrieve all the documents from the number collection
        const result = await db.collection('phone').aggregate(pipeline).toArray();
        const cities=result[0].uniqueCities;
        const citiesCount=result[0].uniqueCitiesCount;

        for(let i=0;i<cities.length;i++){
            const city = cities[i];
            const options = {
                method: 'GET',
                url: `https://open-weather13.p.rapidapi.com/city/${city}/EN`,
                headers: {
                  'x-rapidapi-key': '2c752e91f0msh17edc282c51ce3ep13c79ejsn9e3590039271',
                  'x-rapidapi-host': 'open-weather13.p.rapidapi.com'
                }
            };
            
            try {
                const response = await axios.request(options);
                db.collection('temp').updateOne({city: city},{ $set: {city: city, temp: response.data.main,wind:response.data.wind,description:response.data.weather[0].description}},{upsert:true});
            } catch (error) {
                console.error(error);
            }
        }
        // Close the database connection
        //clients.close();

        return clients;
    } catch (error) {
        console.error('Error retrieving numbers:', error);
        throw error;
    }
};

module.exports = unique_cities;




