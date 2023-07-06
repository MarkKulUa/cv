import { store } from '../../store';
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';

import { getFirestore, collection, addDoc } from 'firebase/firestore';

import { setIsAuth } from '../../store/auth';
import authConfig from './config';
import { WELCOME_PAGE_PATH } from '../../constants';

const credentials = getAuth(authConfig);
const db = getFirestore(authConfig);

const signUp = async (name: string, email: string, password: string) => {
  const res = await createUserWithEmailAndPassword(credentials, email, password);
  const user = res.user;

  await addDoc(collection(db, 'users'), {
    uid: user.uid,
    name,
    authProvider: 'local',
    email,
  });

  return res;
};

const signIn = async (email: string, password: string) => {
  return await signInWithEmailAndPassword(credentials, email, password);
};

const logout = () => {
  signOut(credentials).then(() => (document.location = WELCOME_PAGE_PATH));
};

onAuthStateChanged(credentials, (user) => {
  store.dispatch(setIsAuth({ isAuth: !!user, email: user?.email || null }));
});

export { credentials, db, signIn, signUp, logout };
