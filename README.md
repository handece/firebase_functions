# Firebase functions
Cloud Functions for Firebase is a serverless framework that lets you automatically run backend code in response to events triggered by Firebase features and HTTPS requests. Your JavaScript or TypeScript code is stored in Google's cloud and runs in a managed environment. There's no need to manage and scale your own servers.
Before deploy your functions: 
1. Create a firebase project and firestore database table which called **users**
here image 1 
2. Install the latest version of nodejs. [Download node.js](https://nodejs.org/en/)
- `npm install -g npm`
3. Install Firebase CLI
 - `npm install -g firebase-tools`
 4. Create specific folder to functions like called as firecast and login for firebase this directory.
-  `mkdir firecast`
-  `cd firecast/`
 - `firebase login`
> **Note:** Choose your google account, then firebase CLI successfully.
 - `firebase init`
> **Note:** Choose firebase CLI features and the language(javascript or typescript) you want, then enter.
5. Write the functions into the created index.js
- According to this code, getting status true from users collection, and is updated status false every day at 00:00 am.
- `firebase deploy`