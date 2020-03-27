import React, { useState } from 'react';

import Routes from './routes';

import './global.css';

function App() {
  let [counter, setCounter] = useState(0);

  function increment() {
    setCounter(counter + 1);
  }

  return <Routes />;
}

export default App;
