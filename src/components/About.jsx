import React from 'react'
///mirar esto
import Tilt from 'react-parallax-tilt'
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
      variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
      
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card">
        <div
        options={{
          max: 45,
          scale: 1,
          speed: 450
        }}
        className="bg-tertiary rounder-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>

        </div>
      </motion.div>
      </Tilt>
      )}



const About = () => {
  return (
    <>
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}
          >Introduction</p>
          <h2 className={styles.sectionHeadText}
          >Overview.</h2>
        </motion.div>

        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >

        I'm a creative software developer with experience in common programming languages such as Python, Java and C++. 
        Moreover I feel at ease in frameworks like Unity3D, Flutter or Node.js and I have a creative side which helps me
        provide quality content. I can work in English, French or Spanish but I cannot wait to learn a new language.
         I'm a quick learner and I try to learn everyday about the new features in the field of development. 
        Let's work together to bring your ideas to life! 
        
        </motion.p>
        
        <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index)=>(
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
        </div>
    </>
  )
}

export default SectionWrapper(About, "about")