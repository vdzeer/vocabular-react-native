import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import firestore from '@react-native-firebase/firestore';

import { AUTH_PROVIDERS_CONFIG } from '../consts/signin';

export const useFirebaseAuth = () => {
  const subscribe = (cb: (user: FirebaseAuthTypes.User | null) => void) => {
    auth().onAuthStateChanged(cb);

    GoogleSignin.configure({
      webClientId: AUTH_PROVIDERS_CONFIG.google?.webClientId,
      scopes: ['https://www.googleapis.com/auth/userinfo.profile', 'openid'],
    });
  };

  const signOut = async () => {
    await auth().signOut();
  };

  const signInWithGoogle = async () => {
    await GoogleSignin.hasPlayServices();
    const { idToken } = await GoogleSignin.signIn();
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);
    return auth()
      .signInWithCredential(googleCredential)
      .then(() => {
        firestore()
          .collection('users')
          .doc(auth().currentUser?.uid)
          .get()
          .then((user) => {
            if (!user.exists) {
              firestore()
                .collection('users')
                .doc(auth().currentUser?.uid)
                .set({
                  regType: 'google',
                  name: auth().currentUser?.displayName,
                  email: auth().currentUser?.email,
                })
                .catch((error) => {
                  console.log('Something went wrong with added user to firestore: ', error);
                });
            }
          });
      });
  };

  return {
    subscribe,
    signOut,
    signInWithGoogle,
  };
};
