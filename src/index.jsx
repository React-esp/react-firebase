import React from 'react'
import { render } from 'react-dom'
import firebase from 'firebase'
firebase.initializeApp({
    apiKey: "AIzaSyDaqJMizrN8GkD3bYYHcUdPiCwJ2zFvTZs",
    authDomain: "react-firebase-baed9.firebaseapp.com",
    databaseURL: "https://react-firebase-baed9.firebaseio.com",
    projectId: "react-firebase-baed9",
    storageBucket: "react-firebase-baed9.appspot.com",
    messagingSenderId: "29728679073"
})
import App from './components/App'

render(<App />, document.getElementById('app'))