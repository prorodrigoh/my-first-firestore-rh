import admin from 'firebase-admin'
import creds from './credentials.js' // get our key that we got from firestore database to allow a connection to it

admin.initializeApp({ //connect to the firebase suite
  credential: admin.credential.cert(creds) // creates a certificate from our credentials
});

const db = admin.firestore(); // connect to the firestore database and create a variable to use

const restaurants = db.collection('restaurants') // instead of using db.collection('restaurants') everywhere, add it to a variable and use the variable

// deleting the following entries
// Created restaurant cP4Ygjr18i7NtqnNB0V1
// Created restaurant gDAHYZz9SqYJMkPhzH5x


restaurants.doc('cP4Ygjr18i7NtqnNB0V1').delete()
    .then(doc => console.log(`'cP4Ygjr18i7NtqnNB0V1' deleted!`))
    .catch(err => console.error(err))


restaurants.doc('gDAHYZz9SqYJMkPhzH5x').delete()
    .then(doc => console.log(`'gDAHYZz9SqYJMkPhzH5x' deleted!`))
    .catch(err => console.error(err))
