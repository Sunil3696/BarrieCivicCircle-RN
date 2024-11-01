import auth from '@react-native-firebase/auth';

export const signUpUser = (email, password) => auth().createUserWithEmailAndPassword(email, password);
export const signInUser = (email, password) => auth().signInWithEmailAndPassword(email, password);
export const signOutUser = () => auth().signOut();
