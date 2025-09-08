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
        <section>
        <ul>
            <li className='text-white'>Hi</li>
            <li>Hi</li><li>Hi</li><li>Hi</li><li>Hi</li><li>Hi</li>
            <li>Hi</li><li>Hi</li><li>Hi</li><li>Hi</li><li>Hi</li>
            <li>Hi</li>
            <li>Hi</li><li>Hi</li><li>Hi</li><li>Hi</li><li>Hi</li>
            <li>Hi</li>
            <li>Hi</li><li>Hi</li><li>Hi</li><li>Hi</li><li>Hi</li><li>Hi</li>
            <li>Hi</li>
            <li>Hi</li>
            <li>Hi</li><li>Hi</li><li>Hi</li><li>Hi</li><li>Hi</li><li>Hi</li><li>Hi</li><li>Hi</li>
            <li>Hi</li>
            <li>Hi</li><li>Hi</li><li>Hi</li><li>Hi</li><li>Hi</li><li>Hi</li><li>Hi</li><li>Hi</li>
            <li>Hi</li><li>Hi</li><li>Hi</li><li>Hi</li><li>Hi</li><li>Hi</li><li>Hi</li><li>Hi</li>
            <li>Hi</li>
            <li>Hi</li><li>Hi</li><li>Hi</li><li>Hi</li><li>Hi</li><li>Hi</li><li>Hi</li><li>Hi</li>
            <li>Hi</li><li>Hi</li><li>Hi</li><li>Hi</li><li>Hi</li><li>Hi</li><li>Hi</li><li>Hi</li>
            <li>Hi</li>
            <li>Hi</li><li>Hi</li><li>Hi</li><li>Hi</li><li>Hi</li><li>Hi</li><li>Hi</li><li>Hi</li>
            <li>Hi</li>
            <li>Hi</li><li>Hi</li><li>Hi</li><li>Hi</li><li>Hi</li><li>Hi</li><li>Hi</li><li>Hi</li>
        </ul>
      </section>
    </>
  )
}

export default App
