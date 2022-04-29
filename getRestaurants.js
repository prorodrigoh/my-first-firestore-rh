import {restaurants} from './connectDb.js'

// restaurants.get()
//     .then(snapshot => {
//         snapshot.docs.forEach(doc => console.log(doc.data()))
//     })
//     //.catch(err => console.error(err))
//     .catch(console.error)

restaurants
    .where('name','==', 'Bolay')
    .get()
    .then(snapshot => {
        snapshot.docs.forEach(doc => console.log(doc.data()))
    })
    .catch(console.error)