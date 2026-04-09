import { useState } from 'react';
import './App.css';
import MyNavbar from './components/MyNavbar';
import ShrinkingHero from './components/ShrinkingHero';
import Resume from './components/resume/Resume';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <MyNavbar/>
      
      <ShrinkingHero/>

      {/* "Resume" = Education/degree and work experience */}
      <Resume/>
    
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
