const retrieve_numbers = require('./db/retrieve_numbers');
const unique_cities = require('./db/unique_cities');
const temperature_retrieve = require('./db/temperature_retrieve');

const accountSid = 'ACdfaf9a4d85e0b7afd08e2e62728f91e2';
const authToken = 'b8b15d346304fc352cf0b2907f044fe4';

// retrieve_numbers(clit)
//     .then(numbers => {
//         numbers.map(num => {
//             client.messages
//                 .create({
//                     body: `hello ${num.name} today the weather is bit harsh`,
//                     from: '+13018507671',
//                     to: num.number
//                 })
//                 .then(message => console.log(message.sid))
//                 .catch(error => console.error(error));
//         });
//         console.log(numbers);
//     })
//     .catch(error => console.error(error));

async function main(){
const client = require('twilio')(accountSid, authToken);
let clients;
let numbers=[];
let temp=[];
clients=await unique_cities();

result = await retrieve_numbers(clients);
({numbers, clients} = result);

result = await temperature_retrieve(clients);
({temp, clients} = result);
console.log(numbers);
console.log(temp);
const dictionary = temp.reduce((acc, cur) => {
    acc[cur.city] = cur;
    return acc;
}, {});
numbers.map(num => {
                tem=dictionary[num.city];
                console.log("num=",temp);
                client.messages.create({
                        body: `Hello ${num.name},

                        Here is the latest weather update for Tumkur:
                        
                        - **Temperature**: The current temperature is ${tem.temp.temp}°F, feeling like ${tem.temp.feels_like}°F.
                        - **Minimum Temperature**: ${tem.temp_min}°F
                        - **Maximum Temperature**: ${tem.temp.temp_max}°F
                        - **Pressure**: ${tem.temp.pressure} hPa
                        - **Humidity**: ${tem.temp.humidity}%
                        - **Weather**: ${tem.description}
                        - **Wind**: The wind speed is ${tem.wind.speed} mph, blowing from the west (${tem.wind.deg}°) with gusts up to ${tem.wind.gust} mph.
                        
                        Please plan your farming activities accordingly.
                        Stay safe and happy farming!
                        
                        Best regards,
                        
                        The Farming Assistant Team`
                        ,
                        from: '+13018507671',
                        to: num.number
                    })
                    .then(message => console.log(message.sid))
                    .catch(error => console.error(error));
            });




console.log(dictionary);
clients.close();
}
main();


// const client = require('twilio')(accountSid, authToken);
// let client;

// setInterval(async () => {
//     try {
//         let numbers=[];
//         let temp=[];
//         let result = await retrieve_numbers(client);
//         ({numbers, client} = result);

//         result = await temperature_retrieve(client);
//         ({temp, client} = result);
//         console.log(numbers);
//         console.log(temp);
//     } catch (error) {
//         console.error('An error occurred:', error);
//     }
// }, 24*60 * 60 * 1000);