// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyAof7A2wpEylAFHsKWvqeJU8VkYN7G1VMI",
  authDomain: "coldhawaiiweather.firebaseapp.com",
  databaseURL: "https://coldhawaiiweather.firebaseio.com",
  projectId: "coldhawaiiweather",
  storageBucket: "coldhawaiiweather.appspot.com",
  messagingSenderId: "645018619046",
  appId: "1:645018619046:web:2ae11bff4009e1e965f867",
  measurementId: "G-61E1DX0Z3Q"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const firestore = firebase.firestore();

const docRef = firestore.doc("samples/sandwichData");

const outputHeader = document.querySelector("#hotdogOutPut");
const inputTextField = document.querySelector("#latestHotdogStatus");
const saveButton = document.querySelector("#saveButton");

saveButton.addEventListener("click", e => {
  const textToSave = inputTextField.value;
  console.log("save clicked " + textToSave);

  docRef
    .set({
      hotdogStatus: textToSave
    })
    .then(() => {
      console.log("saved!");
    })
    .catch(error => {
      console.log("got an error: ", error);
    });
});

thingToDoWhithDocumentData = doc => {
  if (doc && doc.exists) {
    const myData = doc.data();
    console.log("Got snapshot doc: ", doc);
    outputHeader.innerText = "Hot dog Status: " + myData.hotdogStatus;
  }
};

getRealtimeUpdates = () => {
  docRef.onSnapshot(
    { includeMetadataChanges: true },
    thingToDoWhithDocumentData
  );
};

getRealtimeUpdates();
