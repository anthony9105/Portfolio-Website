import { motion, useScroll, useTransform } from 'framer-motion';
import './ShrinkingHero.css';
import { useEffect, useState } from 'react';
import { LogoIcon } from './LogoIcon';
import linkedInLogo from '../assets/li.png';
import gitHubLogo from '../assets/github-icon.png';


type ShrinkingHeroProps = {
  lockedHeight: boolean;
  setLockedHeight: (value: boolean) => void;
};


// const MAX_HEIGHT: number = 875; // px, initial hero height
const MIN_HEIGHT: number = 64;  // px, minimum hero height on scroll


export default function ShrinkingHero({ lockedHeight, setLockedHeight }: ShrinkingHeroProps) {
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


  // const scrollToSection = (id: string) => {
  //   const el = document.getElementById(id);

  //   if (!el) return;

  //   el.scrollIntoView({
  //       behavior: "smooth",
  //       block: "start"
  //   });
  // };
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;

    const offset = 120;

    const top =
      el.getBoundingClientRect().top +
      window.scrollY -
      offset;

    window.scrollTo({
      top,
      behavior: "smooth"
    });
  };
  
  return (
    <motion.div id='root-div' style={{ height: lockedHeight ? "94vh" : height }}>
      <div id='title-text-div'>
        <div id='title-intro'>
          <h2>Hi, I'm</h2>
          <h1>Anthony Liscio</h1>
          <h4>Software Developer</h4>
        </div>

        <div className='social-media-and-see-buttons-wrapper'>
          <div className='social-media-row'>
            <LogoIcon logo={linkedInLogo} alt='LinkedIn' link='https://www.linkedin.com/in/anthony-liscio' size={100}></LogoIcon>
            <LogoIcon logo={gitHubLogo} alt='GitHub' link='https://github.com/anthony9105' size={100}></LogoIcon>
          </div>
          
          <div className='see-button-wrapper'>

            <button 
              className='rounded see-button' 
              onClick={
                () => {
                  setLockedHeight(true);
                  scrollToSection('portfolio');
                }
              }>See Portfolio
            </button>

            <button 
              className='rounded see-button' 
              onClick={
                () => {
                  setLockedHeight(true);
                  scrollToSection('qualifications');
                }
              }>See Qualifications
            </button>

          </div>
        </div>

      </div>
    </motion.div>
  );
}