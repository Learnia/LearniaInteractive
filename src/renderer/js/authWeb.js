const Firebase = require('firebase')
const FirebaseUI = require('firebaseui')

let uiConfig = {
  signInSuccessUrl: '#/inside',
  signInOptions: [
    // Leave the lines as is for the providers you want to offer your users.
    Firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    Firebase.auth.FacebookAuthProvider.PROVIDER_ID,
    Firebase.auth.GithubAuthProvider.PROVIDER_ID,
    Firebase.auth.EmailAuthProvider.PROVIDER_ID
  ],
  // Terms of service url.
  tosUrl: '<your-tos-url>'
}

// Initialize the FirebaseUI Widget using Firebase.
var ui = new FirebaseUI.auth.AuthUI(Firebase.auth())
// The start method will wait until the DOM is loaded.
// ui.start('#firebaseui-auth-container', uiConfig)

function logout () {
  Firebase.auth().signOut()
}

export {
  ui,
  uiConfig,
  logout
}
