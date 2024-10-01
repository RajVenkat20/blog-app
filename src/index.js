import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// The below code till line 24 is for authenticating users using Firebase
// NOTE: The below keys are public, so they can be pushed to Github
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBX0AvBbA_9YidfEFpc7kp2qW6SotQrPJU",
  authDomain: "react-blog-app-afb21.firebaseapp.com",
  projectId: "react-blog-app-afb21",
  storageBucket: "react-blog-app-afb21.appspot.com",
  messagingSenderId: "588563975280",
  appId: "1:588563975280:web:83921b486ffecdea7638b5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
