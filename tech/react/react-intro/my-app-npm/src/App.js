import React from 'react';
import './App.css';

import Clock from './components/Clock'
import Highscore from './components/Highscore';
import Hotdog from './components/Hotdog';
import Weather from './components/Weather';

function App() {
  return (
    <div className="App">
      <Clock />
      <Hotdog />
      <Weather />
      <Highscore />
    </div>
  );
}

export default App;
