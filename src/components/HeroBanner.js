import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import HeroBannerImage from '../assets/images/bg2.png';
import {motion} from 'framer-motion';
import {slideIn,staggerContainer,textVariant,zoomIn,textContainer,textVariant2} from '../utils/motion';
import './herobanner.css';
import HeroBannerImage2 from '../assets/images/home-img.png';

const TypingText = ({ title }) => (
  <motion.p
  variants={textContainer}
  >
    {Array.from(title).map((letter,index) =>(
      <motion.span
      variants={textVariant2}
      key={index}>
        {letter === ' ' ? '\u00A0' : letter}
      </motion.span>
    ))}
  </motion.p>
);


const HeroBanner = () => (
  <motion.div
  variants= {staggerContainer}
  initial="hidden"
  whileInView="show"
  viewport={{ once:false , amount:0.5}}
  className='herobanner'
  >
     <motion.div
    
    style={{
      backgroundImage: `url(${HeroBannerImage})`,
      backgroundSize: '100% 100%', // or 'contain'
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
    }}>

<motion.div
    variants={slideIn('left','tween',0.5,1.2)}
    style={{
      backgroundImage: `url(${HeroBannerImage2})`,
      backgroundSize: '45% 100%', // or 'contain'
      backgroundPosition: 'right',
      backgroundRepeat: 'no-repeat',
    }}>
    
  
  <Box sx={{ mt: { lg: '0px', xs: '0px' }, ml: { sm: '50px' } }} position="relative" p="20px" >
 <Typography fontWeight={700} sx={{ fontSize: { lg: '35px', xs: '40px' } }} mb="23px" mt="10px">
      <motion.h1
      variants={textVariant(1.2)}
      className='title'
        >PLANET FITNESS</motion.h1>
    </Typography>
    
    <Typography fontWeight={700} sx={{ fontSize: { lg: '35px', xs: '40px' } }} mb="23px" mt="10px" className='subTitle' color='#fff'>
         <motion.p
         variants={slideIn('left','tween',1.3,1.5)}
         >Take the challenge <br />
         lets start your fintness journey
         </motion.p>
    </Typography>
    <Typography  fontSize="22px" fontFamily="Red Hat Display" lineHeight="35px">
      <motion.h5
      variants={slideIn('left','tween',1.6,1.5)}>
      Check out the most effective exercises for you.
      </motion.h5> 
    </Typography>
    <motion.div
    variants={zoomIn(2.6, 1)}>
  <Stack>
      <a href="#exercises" style={{ marginTop: '45px', textDecoration: 'none', width: '200px', textAlign: 'center', background: '#FF2625', padding: '14px', fontSize: '22px', textTransform: 'none', color: 'white', borderRadius: '4px' }}>
        Explore Exercises  
      </a>
      </Stack>
      </motion.div>
      
    <motion.div
    variants= {staggerContainer}
    initial="hidden"
    whileInView="show"
    viewport={{ once:false , amount:0.5}}>
     <Typography fontWeight={400} color="#fff" sx={{ opacity: '0.5', display: { lg: 'block', xs: 'none' }, fontSize: '80px' }}>
    <TypingText title="| let's Start"
      />
    </Typography> 
    </motion.div>
    
  </Box>
  </motion.div>
  </motion.div>
  </motion.div>
  
);

export default HeroBanner;