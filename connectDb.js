import admin from 'firebase-admin'
import creds from './credentials.js' // get our key that we got from firestore database to allow a connection to it

admin.initializeApp({ //connect to the firebase suite
  credential: admin.credential.cert(creds) // creates a certificate from our credentials
});

const db = admin.firestore(); // connect to the firestore database and create a variable to use
export const restaurants = db.collection('restaurants') // instead of using db.collection('restaurants') everywhere, add it to a variable and use the variable
