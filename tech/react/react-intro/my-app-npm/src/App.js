import React from 'react';
import './App.css';

import Clock from './components/Clock'
import Highscore from './components/Highscore';
import Hotdog from './components/Hotdog';

function App() {
  return (
    <div className="App">
      <Clock />
      <Hotdog />
      <Highscore />
    </div>
  );
}

export default App;
