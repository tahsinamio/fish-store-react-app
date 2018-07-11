import Rebase from 're-base';
import firebase from 'firebase';

const fireBaseApp = firebase.initializeApp({
	apiKey: 'AIzaSyDbaBChGvKOeVo49xhlgi9hqx3G-IKiqLQ',
	authDomain: 'react-app-amio.firebaseapp.com',
	databaseURL: 'https://react-app-amio.firebaseio.com'
});

const base = Rebase.createClass(fireBaseApp.database());

export { fireBaseApp };
export default base;
