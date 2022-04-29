//import admin from 'firebase-admin'

// connect to firebase suite
const admin = require("firebase-admin");
const creds = require('./credentials.json');
admin.initializeApp({
  credential: admin.credential.cert(creds)
});

//connect to the firestore project
const db = admin.firestore();   

const restaurant = {
    name: 'Mister 01',
    address: '555 N Federal Hwy Suite #5, Boca Raton, FL 33432',
    cuisine: 'Pizza',
    rating: 4.9,
    phone: '(786) 677-2903',
}

db.collection('restaurants').add(restaurant)
    .then(doc => console.log('Created restaurant', doc.id))
    .catch(err => console.error(err))