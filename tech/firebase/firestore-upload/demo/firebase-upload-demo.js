// Add the Firebase Admin SDK to Your Server
let admin = require("firebase-admin");

// Import crecential for the service account
let serviceAccount = require("./serviceAccountKey.json");

// Initialize the default app
let app = admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://coldhawaiiweather.firebaseio.com"
});

let db = admin.firestore();

// Generate some fake weather data
const weatherData = {
  time: Date.now(),
  windSpeed: getRandomInt(15, 3),
  windDir: getRandomInt(0, 359),
};

// Add document to Firestore
let addDoc = db.collection("weather").add(weatherData);

// Helper - Generates random integer values 
function getRandomInt(max, min) {
  const diff = max - min;
  return Math.floor(Math.random() * Math.floor(diff) + min);
}
