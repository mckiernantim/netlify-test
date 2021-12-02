import firebase from "firebase/compat";
import "firebase/compat/auth"

const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID,
    measurementId: process.env.REACT_APP_MEASUREMENT_ID
  };

const app = firebase.initializeApp(firebaseConfig);
export const auth = app.auth()

const googleProvider = new firebase.auth.GoogleAuthProvider()
const githubProvider = new firebase.auth.GithubAuthProvider()


export const signInWithGoogle = async () => {
    try {
        await auth.signInWithPopup(googleProvider)
    } catch (error) {
        
        alert(error)
    }
};

export const signInWithGithub = async () => {
    try {
        await auth.signInWithPopup(githubProvider)
    } catch (error) {
        alert(error)
    }
};

export const signInWithEmailAndPassword = (email, password) => {
    try {
        auth.signInWithEmailAndPassword(email, password)
    } catch (error) {
        alert(error)
    }
}

export  const signUpWithEmailAndPassword = (email, password) => {
    try {
        auth.createUserWithEmailAndPassword(email, password)
    } catch (error) {
        alert(error)
    }
}
export const signOut = async () =>{
    try {
        await auth.signOut()
    } catch (error) {
        alert(error)
    }
}