import React, { useEffect, useState } from "react";

// import the firebase configuration settings
import firebase from "../lib/Firebase";

// initialize firestore
const firestore = firebase.firestore();

const docRef = firestore.doc("samples/sandwichData");

function Hotdog() {

  const thingToDoWhithDocumentData = doc => {
    if (doc && doc.exists) {
      const myData = doc.data();
      setHotdogStatus(myData.hotdogStatus);
    }
  };

  const getRealtimeUpdates = () => {
    docRef.onSnapshot(thingToDoWhithDocumentData);
  };

  const [hotdogStatus, setHotdogStatus] = useState("");

  useEffect(() => {
    // subscribe to realtime updates when component loads or updates
    getRealtimeUpdates();
  });

  return (
    <div className="hotdog-status">
      <b>Breaking News</b>
      <h1>Hotdog status: <span>{hotdogStatus}</span></h1>
    </div>
  );
}

export default Hotdog;
