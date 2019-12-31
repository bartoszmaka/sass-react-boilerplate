import React from 'react';
import Navbar from './components/Navbar';
import background from './assets/images/backgrounds/beach.jpg'

function App() {
  return (
    <>
      <img className="background" alt="background" src={background}/>
      <Navbar />
    </>
  );
}

export default App;
