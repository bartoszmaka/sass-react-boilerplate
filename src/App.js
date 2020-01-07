import React from 'react';
import Navbar from './components/Navbar';
import Main from './components/Main';
import background from './assets/images/backgrounds/beach.jpg'

function App() {
  return (
    <>
      <img className="background" alt="background" src={background}/>
      <Navbar />
      <Main />
    </>
  );
}

export default App;
