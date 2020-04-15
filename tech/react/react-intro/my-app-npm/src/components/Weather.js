import React, { useEffect, useState } from "react";

import fakeWeatherData from '../lib/fake_weather';

// import the firebase configuration settings
import firebase from "../lib/Firebase";

// initialize firestore
const firestore = firebase.firestore();

function Weather() {

  const handleData = snapshot => {
    if (snapshot.empty) {
      console.log("No matching documents");
      return;
    }

    let weatherDataArray = [];

    snapshot.forEach(doc => {
      let myData = doc.data();
      myData["key"] = doc.id;
      weatherDataArray.push(myData);
    })

    setWeatherData(weatherDataArray);
  };

  const subscribeToRealtimeUpdates = () => {
    const query = firestore.collection("weather")
      .orderBy('lastUpdate', 'desc')
      .limit(3);
    query.onSnapshot(handleData);
  };

  useEffect(
    () => {
      subscribeToRealtimeUpdates();
    },
    // provide empty array to avoid infinite loop
    []
  );

  const [weatherData, setWeatherData] = useState([]);

  return (
    <div>
      <h1>Fake Weather data from firebase</h1>
      <MeasurementList weatherData={weatherData} />

      <h1>Fake Weather data (from file)</h1>
      <MeasurementList weatherData={fakeWeatherData} />
    </div>
  );
}

const MeasurementList = props => {
  return (
    <div>
      {
        props.weatherData.map(it => (
          <MeasurementDay key={it.key} item={it} />
        ))
      }
    </div>
  )
}

const MeasurementDay = props => {
  return (
    <div>
      <h2>Fake wind data, Updated: {props.item.lastUpdate.toDate().toLocaleString()}</h2>
      <table>
        <thead>
          <tr>
            <th>Time</th>
            <th>Wind speed</th>
            <th>Wind direction</th>
          </tr>
        </thead>

        <tbody>
          {
            props.item.windMeasurements.map((it, i) => (
              <tr key={i}>
                <td>{it.time.toDate().toISOString()}</td>
                <td>{it.windSpeed}</td>
                <td>{it.windDir}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  );
};

export default Weather;
