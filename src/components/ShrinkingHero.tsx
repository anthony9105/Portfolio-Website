import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';
import './ShrinkingHero.css';


const MAX_HEIGHT: number = 600; // px, initial hero height
const MIN_HEIGHT: number = 64;  // px, minimum hero height on scroll


export default function ShrinkingHero() {
  const { scrollYProgress } = useScroll();

//   const height = useTransform(
//     scrollYProgress, 
//     [0, 0.2], 
//     ["500vh", "64px"],
//   );
  const height: MotionValue<number> = useTransform(
    scrollYProgress,
    [0, 0.5],
    // [0, MAX_HEIGHT - MIN_HEIGHT],
    [MAX_HEIGHT, MIN_HEIGHT]
  );

  const textColour: string = 'rgba(255, 255, 255, 0.7)';
  const nameTextColour: string = 'rgba(255, 255, 255, 1)';
  
  return (
    <motion.div id='root-div' style={{ height }}>
      <div id='title-text-div'>
        <h2 style={{fontSize: '58px', margin: '0px 10px', color: textColour}}>Hi, I'm</h2>
        <h1 style={{fontSize: '110px', margin: '0px 10px', color: nameTextColour, textShadow: '2.5px 2.5px 5px rgba(43, 0, 255, 0.5)'}}>Anthony Liscio</h1>
        <h4 style={{fontSize: '28px', margin: '10px 10px', color: textColour}}>Software Developer</h4>
        
        <div style={{display: 'flex', flexDirection: 'row'}}>
          <button className='rounded see-button'>See my work</button>
          <button className='rounded see-button'>See my qualifications</button>
        </div>

       </div>
    </motion.div>
  );
}