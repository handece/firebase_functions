const functions = require("firebase-functions");
const admin = require('firebase-admin');

admin.initializeApp(functions.config().firebase);

exports.scheduledFunctionPassiveUser = functions.pubsub
    .schedule("0 0 * * *") // to work every day at 00:00 am
    .timeZone("Europe/Istanbul") 
    .onRun(async (context) => {
        const batch = admin.firestore().batch();
        const users = admin.firestore().collection('users'); // firestore collection which called users
        const user = await users.where('status', '==', true).get(); // to get users that status true
        user.forEach(async snapshot => { 
            await batch.update(snapshot.ref,{'status':false}); // to update users that status true
            
        })
        batch.commit();
        return null;
});