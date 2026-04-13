import './App.css';
import MyNavbar from './components/MyNavbar';
import ShrinkingHero from './components/ShrinkingHero';
import Resume from './components/resume/Resume';
import PortfolioSection from './components/portfolio/PortfolioSection';

function App() {
  return (
    <>
      <MyNavbar/>
      
      <ShrinkingHero/>

      <div className='resume-portfolio-background'>
        <Resume/>

        <PortfolioSection/>
      </div>
    </>
  )
}

export default App
