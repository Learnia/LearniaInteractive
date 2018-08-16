
// Configuracion de autenticacion OAuth

// Github
const GitHub = {
  client_id: 'c56f182ac68bef2f310c',
  client_secret: '8720f07845eba027e7acea8f61226fb42d872de8',
  scope: 'read:user',
  redirect_uri: 'https://learniainteractive-e7a8c.firebaseapp.com/__/auth/handler',
  authorize_url: 'https://github.com/login/oauth/authorize',
  access_token_url: 'https://github.com/login/oauth/access_token'
}

// Client-side Web Applications
// Impolicit Flow
const GoogleClientWebApp = {
  client_id: '720459362900-cg5rnl1b13nra87hnrso71gfp3npf8ji.apps.googleusercontent.com',
  client_secret: 'SJza9TmB2SYWOGfG9i6zXbvw',
  redirect_uri: 'https://learniainteractive-e7a8c.firebaseapp.com/__/auth/handler',
  authorize_url: 'https://accounts.google.com/o/oauth2/v2/auth',
  response_type: 'token',
  scope: 'https://www.googleapis.com/auth/userinfo.profile'
}

// Web Server Applications
const GoogleWebServerApp = {
  client_id: '720459362900-cg5rnl1b13nra87hnrso71gfp3npf8ji.apps.googleusercontent.com',
  client_secret: 'SJza9TmB2SYWOGfG9i6zXbvw',
  redirect_uri: 'https://learniainteractive-e7a8c.firebaseapp.com/__/auth/handler',
  authorize_url: 'https://accounts.google.com/o/oauth2/v2/auth',
  access_token_url: 'https://www.googleapis.com/oauth2/v4/token',
  access_type: 'online',
  response_type: 'code',
  scope: 'https://www.googleapis.com/auth/userinfo.profile'
}

const FacebookImplicit = {
  client_id: '377023849391862',
  client_secret: '18a730dc7e4aaf701a8c8edefaea9481',
  authorize_url: 'https://www.facebook.com/v2.11/dialog/oauth',
  response_type: 'token',
  redirect_uri: 'https://www.facebook.com/connect/login_success.html'
}

const FacebookAuthCode = {
  client_id: '377023849391862',
  client_secret: '18a730dc7e4aaf701a8c8edefaea9481',
  authorize_url: 'https://www.facebook.com/v2.11/dialog/oauth',
  access_token_url: 'https://graph.facebook.com/v2.11/oauth/access_token',
  redirect_uri: 'https://www.facebook.com/connect/login_success.html'
}
/*
const Twitter = {
  oauth_consumer_key: "your consumer key",
  oauth_consumer_secret: "your consumer secret",
  request_token_url: "https://api.twitter.com/oauth/request_token",
  authenticate_url: "https://api.twitter.com/oauth/authenticate",
  access_token_url: "https://api.twitter.com/oauth/access_token",
  callback_url: "your callback url"
}

const LinkedIn = {
  response_type: "code",
  client_id: "your consumer secret",
  redirect_uri: "https://www.linkedin.com/oauth/v2/authorization",
  state: "https://www.linkedin.com/oauth/v2/authorization",
  scope: "https://www.linkedin.com/oauth/v2/authorization"
}

*/

const Firebase = {
  apiKey: 'AIzaSyBkZp5V8vCxUwywH04Pw3_wduEoPLMLC-w',
  authDomain: 'learniainteractive-e7a8c.firebaseapp.com',
  databaseURL: 'https://learniainteractive-e7a8c.firebaseio.com',
  projectId: 'learniainteractive-e7a8c',
  storageBucket: 'learniainteractive-e7a8c.appspot.com',
  messagingSenderId: '720459362900'
}

const mapTypeToConfig = type => {
  return {
/*     Firebase,
    GoogleClientWebApp,
    GoogleWebServerApp,
    FacebookImplicit,
    FacebookAuthCode,
    GitHub */
  }[type]
}

module.exports = mapTypeToConfig
