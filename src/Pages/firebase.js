// Import the necessary Firebase services
import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

// Initialize Firebase with your configuration
const firebaseConfig = {
    apiKey: "AIzaSyCMlk3BWGtxWKm37c4it7h-0SeyyUCPOHU",
    authDomain: "ebk-ticketing-system.firebaseapp.com",
    projectId: "ebk-ticketing-system",
    storageBucket: "ebk-ticketing-system.appspot.com",
    messagingSenderId: "727887039052",
    appId: "1:727887039052:web:e5fbea09bd5a74a90642e9",
    measurementId: "G-0FE4YZ35YM"
  };


const firebaseApp = initializeApp(firebaseConfig);

// Export Firebase services you need
const auth = getAuth(firebaseApp);

// Define the registerUser function
const registerUser = async (email, password) => {
  try {
    await createUserWithEmailAndPassword(auth, email, password);
    return { success: true, error: null };
  } catch (error) {
    return { success: false, error: error.message };
  }
};

export { auth, registerUser };  // Add any other services you need
