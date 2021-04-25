import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import * as firebaseUi from 'firebaseui';
import refs from './refs';

const firebaseConfig = {
  apiKey: "AIzaSyDCrVa6zpkJN0MnC22HGNcfi7vaIe8Op8M",
  authDomain: "filmoteka-bl1.firebaseapp.com",
  databaseURL: "https://filmoteka-bl1-default-rtdb.firebaseio.com",
  projectId: "filmoteka-bl1",
  storageBucket: "filmoteka-bl1.appspot.com",
  messagingSenderId: "616243203343",
  appId: "1:616243203343:web:c89027d397f3da6ce4827a",
  measurementId: "G-3Z1JDDZM39"
};
firebase.initializeApp(firebaseConfig);
const ui = new firebaseUi.auth.AuthUI(firebase.auth());
const database = firebase.database();
const uiConfig = {
  callbacks: {
    signInSuccessWithAuthResult: function (authResult) {
      openCloseModal();
      // User successfully signed in.
      // Return type determines whether we continue the redirect automatically
      // or whether we leave that to developer to handle.
      return false;
    },
    uiShown: function() {
      // The widget is rendered.
      // Hide the loader.
      // document.getElementById('loader').style.display = 'none';
    }
  },
  // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
  signInFlow: 'popup',
  signInSuccessUrl: '/',
  signInOptions: [
    // Leave the lines as is for the providers you want to offer your users.
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.FacebookAuthProvider.PROVIDER_ID,
    firebase.auth.GithubAuthProvider.PROVIDER_ID,
    firebase.auth.EmailAuthProvider.PROVIDER_ID,
  ],
  // Terms of service url.
  tosUrl: 'https://www.termsfeed.com/live/6606e203-ca11-437b-b584-e1765cda9c0e>',
  // Privacy policy url.
  privacyPolicyUrl: 'https://www.privacypolicies.com/live/5a40fc7e-8fd2-4cd0-8754-e6ebf6281fb4'
};
function initApp() {
        firebase.auth().onAuthStateChanged(function(user) {
          if (user) {
            // User is signed in.
            signedUser(user.photoURL, user.displayName);
          } else {
            // User is signed out.
            noSignedUser();
          }
        }, function(error) {
          console.log(error);
        });
};

function signOut() {
  return firebase.auth().signOut()
}

function signedUser(url, name) {
  refs.registrationBtn.textContent = 'Sign out';
  refs.registrationBtn.style.marginRight = "0px";
  refs.registrationBtn.addEventListener('click', signOut);
  refs.accountInfo.insertAdjacentHTML("afterbegin",`<img  class="user-img" src= ${url} alt= ${name} width="48px">`);
}

function noSignedUser() {
  refs.registrationBtn.textContent = 'Sign in';
  refs.registrationBtn.style.marginRight = "60px";
  refs.accountInfo.textContent = "";
  refs.registrationBtn.removeEventListener('click', signOut);
}

function openCloseModal() {
  refs.registrationModal.classList.toggle('is-hidden');
  if (refs.registrationModal.classList.contains('is-hidden')) { 
    window.removeEventListener('keydown', onEscCloseRegModal);
    refs.registrationModal.querySelector('.modal-close')
    .removeEventListener('click', openCloseModal);
    refs.registrationModal.removeEventListener('click', onBdpRegClick);
    return;
  }
    window.addEventListener('keydown', onEscCloseRegModal);
    refs.registrationModal.querySelector('.modal-close')
    .addEventListener('click', openCloseModal);
    refs.registrationModal.addEventListener('click', onBdpRegClick);
}

function onBdpRegClick(e) {
    if (e.target !== refs.registrationModal) {
        return
    }
    openCloseModal()
}

function onEscCloseRegModal(e) {
    if (e.code === 'Escape') openCloseModal()
}

function writeUserData(userId, name, email, imageUrl) {
  database.ref('users/' + userId).set({
    username: name,
    email: email,
    profile_picture : imageUrl
  });
}

function readUserData() {
  const userId = firebase.auth().currentUser.uid;
  database.ref('users/' + userId).get().then((snapshot) => {
  if (snapshot.exists()) {
    console.log(snapshot.val());
  } else {
    console.log("No data available");
  }
}).catch((error) => {
  console.error(error);
});
}

export { ui, uiConfig, initApp, writeUserData, readUserData, openCloseModal };