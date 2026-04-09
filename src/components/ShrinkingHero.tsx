import { motion, useScroll, useTransform } from 'framer-motion';
import './ShrinkingHero.css';
import { useEffect, useState } from 'react';
import { LogoIcon } from './LogoIcon';
import linkedInLogo from '../assets/li.png';
import gitHubLogo from '../assets/github-icon.png';


// const MAX_HEIGHT: number = 875; // px, initial hero height
const MIN_HEIGHT: number = 64;  // px, minimum hero height on scroll


export default function ShrinkingHero() {
  const { scrollYProgress } = useScroll();

  const [maxHeight, setMaxHeight] = useState<number>(
    window.innerHeight * 0.94 // start correct immediately
  );

  // Update on resize
  useEffect(() => {
    const updateHeight = () => {
      setMaxHeight(window.innerHeight * 0.94);
    };

    window.addEventListener('resize', updateHeight);

    return () => {
      window.removeEventListener('resize', updateHeight);
    };
  }, []);

  // FUNCTION-BASED transform
  const height = useTransform(scrollYProgress, (value) => {
    const progress = Math.min(value / 0.6, 1);

    return maxHeight - progress * (maxHeight - MIN_HEIGHT);
  });
  
  return (
    <motion.div id='root-div' style={{ height }}>
      <div id='title-text-div'>
        <div id='title-intro'>
          <h2>Hi, I'm</h2>
          <h1>Anthony Liscio</h1>
          <h4>Software Developer</h4>
        </div>

        <div className='social-media-row'>
          <LogoIcon logo={linkedInLogo} alt='LinkedIn' link='https://www.linkedin.com/in/anthony-liscio' size={100}></LogoIcon>
          <LogoIcon logo={gitHubLogo} alt='GitHub' link='https://github.com/anthony9105' size={100}></LogoIcon>
        </div>
        
        <div style={{display: 'flex', flexDirection: 'row'}}>
          <button className='rounded see-button'>See Portfolio</button>
          <button className='rounded see-button'>See Qualifications</button>
        </div>

      </div>
    </motion.div>
  );
}