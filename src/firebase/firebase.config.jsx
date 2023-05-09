
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyANeQBbUIlnybhTYmtla2f6Q62k3BOwoL8",
  authDomain: "emajohn-web.firebaseapp.com",
  projectId: "emajohn-web",
  storageBucket: "emajohn-web.appspot.com",
  messagingSenderId: "391817648735",
  appId: "1:391817648735:web:cf7f0e2e3d03c68b5459ea"
  // apiKey: import.meta.env.VITE_REACT_APP_API_KEY,
  // authDomain: import.meta.env.VITE_REACT_APP_AUTH_DOMAIN,
  // projectId: import.meta.env.VITE_REACT_APP_PRJECT_ID,
  // storageBucket: import.meta.env.VITE_REACT_APP_STORAGE_BUCKET,
  // messagingSenderId: import.meta.env.VITE_REACT_APP_MESSAGING_SENDER_ID,
  // appId: import.meta.env.VITE_REACT_APP_APP_ID
};


const app = initializeApp(firebaseConfig);

export default app