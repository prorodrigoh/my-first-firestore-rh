//import admin from 'firebase-admin'

// connect to firebase suite
const admin = require("firebase-admin");
const creds = require('./credentials.json');
admin.initializeApp({
  credential: admin.credential.cert(creds)
});

//connect to the firestore project
const db = admin.firestore();   

// const restaurant = {
//     name: 'Mister 01',
//     address: '555 N Federal Hwy Suite #5, Boca Raton, FL 33432',
//     cuisine: 'Pizza',
//     rating: 4.9,
//     phone: '(786) 677-2903',
// }

// db.collection('restaurants').add(restaurant)
//     // doc.id is a random string auto generated
//     .then(doc => console.log('Created restaurant', doc.id))
//     .catch(err => console.error(err))

const restaurant2 = {
    name: 'Bolay',
    address: '7060 W Palmetto Park Rd, Boca Raton, FL 33433',
    cuisine: 'American',
    rating: 4.6,
}

async function addRestaurant (data) {
    try {
        const doc = await db.collection('restaurants').add(data)
        console.log('Created restaurant', doc.id)
    } catch(err) {
        console.error(err)
    }
}
addRestaurant(restaurant2)

