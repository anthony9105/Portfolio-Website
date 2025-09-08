import { motion, useScroll, useTransform } from 'framer-motion';
import heroImage from '../assets/header-13.png';
import './ShrinkingHero.css';


const MAX_HEIGHT = 600; // px, initial hero height
const MIN_HEIGHT = 64;  // px, minimum hero height on scroll


export default function ShrinkingHero() {
  const { scrollYProgress } = useScroll();

//   const height = useTransform(
//     scrollYProgress, 
//     [0, 0.2], 
//     ["500vh", "64px"],
//   );
  const height = useTransform(
    scrollYProgress,
    [0, 0.5],
    // [0, MAX_HEIGHT - MIN_HEIGHT],
    [MAX_HEIGHT, MIN_HEIGHT]
  );
  
  return (
    <motion.div 
      style={{
        marginTop: '56px', 
        paddingTop: '64px',
        height,
        backgroundImage: `url(${heroImage}), linear-gradient(-135deg, rgba(24, 24, 94, 1) 0%, rgba(43, 43, 48, 1) 100%)`,
        // background: `linear-gradient(135deg, rgba(43, 0, 255, 0.3), rgba(255, 0, 150, 0.2)), url(${heroImage})`,
        // backgroundImage: `url(${heroImage})`,
        backgroundSize: 'contain, cover',
        backgroundPosition: '70% center, center',
        backgroundRepeat: 'no-repeat, no-repeat',
        position: 'relative',
        opacity: 1,
        // overflow: 'visible',
        boxShadow: '0 8px 15px rgba(0, 0, 0, 1)'
      }}
    >

      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start', // keeps text left-aligned within the div
        width: 'fit-content', // div only takes up as much width as needed
        marginLeft: '4%',
       }}>
        <h2 style={{fontSize: '58px', margin: '0px 10px', color: 'rgba(255, 255, 255, 0.7)'}}>Hi, I'm</h2>
        <h1 style={{fontSize: '110px', margin: '0px 10px', color: 'rgba(255, 255, 255, 0.7)', textShadow: '2.5px 2.5px 5px rgba(43, 0, 255, 0.5)'}}>Anthony Liscio</h1>
        <h4 style={{fontSize: '28px', margin: '10px 10px', color: 'rgba(255, 255, 255, 0.7)'}}>Software Developer</h4>
        <button className='rounded' style={{padding: '10px', margin: '50px 10px'}}>See my work</button>
       </div>
    </motion.div>
  );
}