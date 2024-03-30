import { motion } from 'framer-motion';
import esp from '../assets/esp.jpg';
import esp2 from '../assets/esp2.svg';
import fr from '../assets/fr.png';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import eng from '../assets/eng.png';
import { styles } from '../styles'
import { ComputersCanvas } from './canvas';

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div className={`absolute inset-0 top-[120px] max-w-7x1 mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}>
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#915EFF]">Luis</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            and I Develop Software 
            <br className="sm:block hidden" /> in any of these languages:
            
          </p>
          <div class="row">
  <div class="column">
  <img src={esp2}  alt="logo" height={20} width={80}/>
    <img src={fr}  alt="logo" height={20} width={80}/>
    <img src={eng}  alt="logo" height={20} width={80}/>
  </div>
  </div>
        
          
        </div>
        
      </div>
      <ComputersCanvas />

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
              <motion.dev
                animate={{y: [0,24,0]}} transition={{duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop'
              }} 
              className="w-3 h-3 rounded-full bg-secondary mb-1"
              />
          </div>
        </a>
      </div>
    </section>
  )
}

export default Hero