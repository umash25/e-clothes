import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyAsDspMDAD3GJiWeIurJJiAji4gr1lnvR0",
    authDomain: "eclothes-db.firebaseapp.com",
    projectId: "eclothes-db",
    storageBucket: "eclothes-db.appspot.com",
    messagingSenderId: "191956352723",
    appId: "1:191956352723:web:78e351c26a3971386f5e26",
    measurementId: "G-N7X09DLSDG"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;
    const userRef = firestore.doc(`users/${userAuth}`);
    const snapShot = userRef.get(userRef);

    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();
        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log('Firebase Error', error)
        }
    }
    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ 'prompt': 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;