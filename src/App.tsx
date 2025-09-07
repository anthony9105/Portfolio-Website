import { useState } from 'react';
import './App.css';
import MyNavbar from './components/MyNavbar';
import ShrinkingHero from './components/ShrinkingHero';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <MyNavbar/>
      <ShrinkingHero/>
    </>
  )
}

export default App
