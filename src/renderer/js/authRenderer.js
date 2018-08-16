import swal from 'sweetalert'
import queryString from 'query-string'

const { OAuth2Provider } = require('electron').remote.require('electron-oauth-helper')
const mapTypeToConfig = require('../../../services/config')
const Firebase = require('firebase')

function signInWithGoogle () {
  try {
    const provider = new OAuth2Provider(mapTypeToConfig('GoogleClientWebApp'))

    provider.perform().then(resp => {
      const credential = Firebase.auth.GoogleAuthProvider.credential(null, resp['access_token'])
      Firebase.auth().signInWithCredential(credential)
        .then(user => { console.log('user 2: ', user) })
        .catch(error => console.error('error: ', error))
    })
      .catch(error => console.error(error))
  } catch (error) {
    console.error(error)
  }
}

function signInWithGithub () {
  const provider = new OAuth2Provider(mapTypeToConfig('GitHub'))

  console.log('sign in with github')
  provider.perform().then(resp => {
    const query = queryString.parse(resp)
    const credential = Firebase.auth.GithubAuthProvider.credential(query.access_token)
    Firebase.auth().signInWithCredential(credential).then(user => {
      console.log(user)
    }).catch(error => console.error(error))
  }).catch(error => console.error(error))
}

function signInWithFacebook () {
  try {
    const provider = new OAuth2Provider(mapTypeToConfig('FacebookImplicit'))

    provider.perform().then(resp => {
      const credential = Firebase.auth.GoogleAuthProvider.credential(resp['access_token'])
      Firebase.auth().signInWithCredential(credential)
        .then(user => { console.log('user 2: ', user) })
        .catch(error => console.error('error: ', error))
    })
      .catch(error => console.error(error))
  } catch (error) {
    console.error(error)
  }
}

function emailCreateUser (email, password) {
  let completed = false

  Firebase.auth().createUserWithEmailAndPassword(email, password).catch(function (error) {
    if (error) {
      let errorCode = error.code
      let errorMessage = error.message

      swal(errorCode, errorMessage)
    }
  })

  if (!completed) {
    return false
  } else {
    swal('Registro correcto !!')
    return true
  }
}

function emailLogin (email, password) {
  let completed = false

  Firebase.auth().signInWithEmailAndPassword(email, password).catch(function (error) {
    if (error) {
      var errorCode = error.code
      var errorMessage = error.message

      swal(errorCode, errorMessage)
    }
    console.log('logeado')
  }).then(() => {
    console.log('test')
  })

  if (!completed) {
    return false
  } else {
    swal('Autenticación correcta !!')
    return true
  }
}

function logout () {
  Firebase.auth().signOut()
}

export {
  signInWithGoogle,
  signInWithGithub,
  signInWithFacebook,
  emailLogin,
  emailCreateUser,
  logout
}
