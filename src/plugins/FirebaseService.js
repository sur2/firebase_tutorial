import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const POSTS = 'posts'
const PORTFOLIOS = 'portfolios'

const config = {
	apiKey: "AIzaSyAmfcMxRXvSvLwSG7ga7LP6-_qrdv8-zDc",
	authDomain: "fir-tutorial-1ed8d.firebaseapp.com",
	databaseURL: "https://fir-tutorial-1ed8d.firebaseio.com",
	projectId: "fir-tutorial-1ed8d",
	storageBucket: "",
	messagingSenderId: "893087202525",
	appId: "1:893087202525:web:cc8d093a86fcc27b"
};

// var config = {
//   apiKey: "AIzaSyBtTyQwI0xLNukBEnzvF-BRbGHhd6LPXIE",
//   authDomain: "test1-e4911.firebaseapp.com",
//   databaseURL: "https://test1-e4911.firebaseio.com",
//   projectId: "test1-e4911",
//   storageBucket: "test1-e4911.appspot.com",
//   messagingSenderId: "YOUR_MESSAGING_SEND_ID"
// };

firebase.initializeApp(config)

const firestore = firebase.firestore()

export default {
	getPosts() {
		const postsCollection = firestore.collection(POSTS)
		return postsCollection
		.orderBy('created_at', 'desc')
		.get()
		.then((docSnapshots) => {
			return docSnapshots.docs.map((doc) => {
				let data = doc.data()
				data.created_at = new Date(data.created_at.toDate())
				return data
			})
		})
	},
	postPost(title, body) {
		return firestore.collection(POSTS).add({
			title,
			body,
			created_at: firebase.firestore.FieldValue.serverTimestamp()
		})
	},
	getPortfolios() {
		const postsCollection = firestore.collection(PORTFOLIOS)
		return postsCollection
		.orderBy('created_at', 'desc')
		.get()
		.then((docSnapshots) => {
			return docSnapshots.docs.map((doc) => {
				let data = doc.data()
				data.created_at = new Date(data.created_at.toDate())
				return data
			})
		})
	},
	postPortfolio(title, body, img) {
		return firestore.collection(PORTFOLIOS).add({
			title,
			body,
			img,
			created_at: firebase.firestore.FieldValue.serverTimestamp()
		})
	},
	logging(name, path) {
		console.log(path)
		name = name ? name : 'Anonymous user'
		return firestore.collection('LOG').add({
			name,
			path,
			time: firebase.firestore.FieldValue.serverTimestamp()
		})
	},

	loginWithFacebook() {
		let provider = new firebase.auth.FacebookAuthProvider()
		return firebase.auth().signInWithPopup(provider).then(function(result) {
			let accessToken = result.credential.accessToken
			let user = result.user
			return result
		}).catch(function(error) {
			console.error('[Facebook Login Error]', error)
		})
	},

	loginWithGoogle() {
		let provider = new firebase.auth.GoogleAuthProvider()
		return firebase.auth().signInWithPopup(provider).then(function(result) {
			let accessToken = result.credential.accessToken
			let user = result.user
			return result
		}).catch(function(error) {
			console.error('[Google Login Error]', error)
		})
	}
}
