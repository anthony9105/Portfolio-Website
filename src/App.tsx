import './App.css';
import MyNavbar from './components/MyNavbar';
import ShrinkingHero from './components/ShrinkingHero';
import Resume from './components/resume/Resume';
import PortfolioSection from './components/portfolio/PortfolioSection';
import { useState } from 'react';

function App() {
  const [lockedHeight, setLockedHeight] = useState(false);
  
  return (
    <>
      <MyNavbar setLockedHeight={setLockedHeight}/>
      
      <ShrinkingHero lockedHeight={lockedHeight} setLockedHeight={setLockedHeight} />

      <div className='resume-portfolio-background'>
        <Resume/>

        <PortfolioSection/>
      </div>
    </>
  )
}

export default App
