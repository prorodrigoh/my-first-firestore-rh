

// // connect to firebase suite via ES5 - NO change on package.json
// const admin = require("firebase-admin");
// const creds = require('./credentials.json');
// admin.initializeApp({
//   credential: admin.credential.cert(creds)
// });

// connect to firebase suite via ES6 - use import instead of require and CHANGE package.json to add "type": "module"
import admin from 'firebase-admin'
import creds from './credentials.json'
admin.initializeApp({
  credential: admin.credential.cert(creds)
});

//connect to the firestore project
const db = admin.firestore();   
// instead of using db.collection('restaurants') everywhere, add it to a variable and use the variable
const restaurants = db.collection('restaurants')

const restaurant = {
    name: 'Mister 01',
    address: '555 N Federal Hwy Suite #5, Boca Raton, FL 33432',
    cuisine: 'Pizza',
    rating: 4.9,
    phone: '(786) 677-2903',
}

restaurants.add(restaurant)
    // doc.id is a random string auto generated
    .then(doc => console.log('Created restaurant', doc.id))
    .catch(err => console.error(err))

const restaurant2 = {
    name: 'Bolay',
    address: '7060 W Palmetto Park Rd, Boca Raton, FL 33433',
    cuisine: 'American',
    rating: 4.6,
}

async function addRestaurant (data) {
    try {
        const doc = await restaurants.add(data)
        console.log('Created restaurant', doc.id)
    } catch(err) {
        console.error(err)
    }
}
addRestaurant(restaurant2)


const restaurant3 = {
    name: 'Addiction Kitchen',
    address: '2131 NE 48th St, Lighthouse Point, FL 33064',
    cuisine: 'American',
    rating: 4.8,
    phone: '(954) 782-4238',
}

restaurants.add(restaurant3)
    .then(doc => console.log('Created restaurant', doc.id))
    .catch(err => console.error(err))