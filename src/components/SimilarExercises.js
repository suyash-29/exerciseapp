import React from 'react';
import { Typography, Box, Stack } from '@mui/material';

import HorizontalScrollbar from './HorizontalScrollbar';
import Loader from './Loader';
import {motion} from 'framer-motion';
import {slideIn,staggerContainer,textVariant,zoomIn,textContainer,textVariant2} from '../utils/motion';


const SimilarExercises = ({ targetMuscleExercises, equipmentExercises }) => (

  <motion.div
  variants= {staggerContainer}
  initial="hidden"
  whileInView="show"
  viewport={{ once:false , amount:0.5}}>

  <Box sx={{ mt: { lg: '30px', xs: '0px' } , mb: { lg: '40px', xs: '20px' }}}>

  
    <Typography fontFamily="Red Hat Display" sx={{ fontSize: { lg: '44px', xs: '25px' }, ml: '20px' }} fontWeight={700} color="#38333b" mb="33px">
    <motion.h4
      variants={slideIn('left','tween',0.2,0.8)}>
      Similar <span style={{ color: '#fff', textTransform: 'capitalize' }}>Target Muscle</span> exercises
      </motion.h4>
    </Typography>
    


    <Stack direction="row" sx={{ p: 2, position: 'relative' }}>
      {targetMuscleExercises.length !== 0 ? <HorizontalScrollbar data={targetMuscleExercises} /> : <Loader />}
    </Stack>
    
    <Typography fontFamily="Red Hat Display" sx={{ fontSize: { lg: '44px', xs: '25px' }, ml: '20px', mt: { lg: '30px', xs: '20px' } }} fontWeight={700} color="#38333b" mb="15px">
    <motion.h4
      variants={slideIn('left','tween',0.2,0.8)}>
    
      Similar <span style={{ color: '#fff', textTransform: 'capitalize' }}>Equipment</span> exercises
      </motion.h4>
      
    </Typography>
    
    <Stack direction="row" sx={{ p: 2, position: 'relative' }}>
      {equipmentExercises.length !== 0 ? <HorizontalScrollbar data={equipmentExercises} /> : <Loader />}
    </Stack>
  </Box>

  </motion.div>
);

export default SimilarExercises;