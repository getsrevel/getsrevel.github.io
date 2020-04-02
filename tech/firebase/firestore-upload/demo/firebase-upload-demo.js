// Add the Firebase Admin SDK to Your Server
const firebase = require("firebase-admin");
// Get the helper classes
FieldValue = firebase.firestore.FieldValue;
Timestamp = firebase.firestore.Timestamp;

const moment = require("moment");

// Import crecential for the service account
const serviceAccount = require("./serviceAccountKey.json");

// Initialize the default app
const app = firebase.initializeApp({
  credential: firebase.credential.cert(serviceAccount),
  databaseURL: "https://coldhawaiiweather.firebaseio.com"
});

const db = firebase.firestore();

// Helper - Generates random integer values 
function getRandomInt(max, min) {
  const diff = max - min;
  return Math.floor(Math.random() * Math.floor(diff) + min);
}

async function storeData() {

  // Set time of update
  const updateTime = Timestamp.now();

  // Generate some fake weather data
  const windData = {
    time: updateTime,
    windSpeed: getRandomInt(15, 3),
    windDir: getRandomInt(0, 359),
  };

  // Document ID should be todays date
  const today = moment(updateTime.toDate());
  const docPath = `weather/${today.format("YYYY-MM-DD")}`;
  const docRef = db.doc(docPath);

  const data = {
    lastUpdate: updateTime,
    windMeasurements: FieldValue.arrayUnion(windData),
  };
  
  const options = { merge: true }
  await docRef.set(data, options);

}

storeData();