import { motion, useScroll, useTransform } from 'framer-motion';
import heroImage from '../assets/header-bg.png';
import './ShrinkingHero.css';


const MAX_HEIGHT = 800; // px, initial hero height
const MIN_HEIGHT = 64;  // px, minimum hero height on scroll


export default function ShrinkingHero() {
  const { scrollYProgress } = useScroll();

//   const height = useTransform(
//     scrollYProgress, 
//     [0, 0.2], 
//     ["100vh", "64px"],
//   );
  const height = useTransform(
    scrollYProgress,
    [0, MAX_HEIGHT - MIN_HEIGHT],
    [MAX_HEIGHT, MIN_HEIGHT]
  );
  
  return (
    <motion.div 
      style={{ 
        height,
        backgroundImage: `url(${heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative',
        opacity: 0.7
      }}
    >
      <h1 className='text-4xl text-white'>Your Content</h1>

      <div className="flex flex-col items-center justify-center h-full">
        <h2 className='text-5xl titleText'>Hi, I'm</h2>
        <h1 className='text-9xl titleTextName'>Anthony Liscio</h1>
        <h4 className='text-l titleText'>Software Developer</h4>
      </div>

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
            <li>Hi</li>
            <li>Hi</li>
            <li>Hi</li>
            <li>Hi</li>
            <li>Hi</li>
            <li>Hi</li>
            <li>Hi</li>
            <li>Hi</li>
            <li>Hi</li>
            <li>Hi</li>
            <li>Hi</li><li>Hi</li><li>Hi</li><li>Hi</li><li>Hi</li><li>Hi</li><li>Hi</li><li>Hi</li>
        </ul>
      </section>
    </motion.div>
  );
}