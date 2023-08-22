import React, { useEffect, useState } from 'react';
import Pagination from '@mui/material/Pagination';
import { Box, Stack, Typography } from '@mui/material';

import { exerciseOptions, fetchData } from '../utils/fetchData';
import ExerciseCard from './ExerciseCard';
import Loader from './Loader';
import {motion} from 'framer-motion';
import {slideIn,staggerContainer,textVariant,zoomIn,textContainer,textVariant2} from '../utils/motion';
import main from '../assets/images/main.png'


const Exercises = ({ exercises, setExercises, bodyPart }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [exercisesPerPage] = useState(9);

  useEffect(() => {
    const fetchExercisesData = async () => {
      let exercisesData = [];

      if (bodyPart === 'all') {
        exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);
      } else {
        exercisesData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`, exerciseOptions);
      }

      setExercises(exercisesData);
    };

    fetchExercisesData();
  }, [bodyPart]);

  // Pagination
  const indexOfLastExercise = currentPage * exercisesPerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
  console.log(exercises)
  const currentExercises = exercises.slice(indexOfFirstExercise, indexOfLastExercise);

  const paginate = (event, value) => {
    setCurrentPage(value);

    window.scrollTo({ top: 1800, behavior: 'smooth' });
  };

  if (!currentExercises.length) return <Loader />;

  return (
    

<motion.div
   variants= {staggerContainer}
   initial="hidden"
   whileInView="show"
   viewport={{ once:false , amount:0.5}}>
     
     <div
   style={{
     backgroundImage: `url(${main})`,
     backgroundSize: '100% 100%', // or 'contain'
     backgroundPosition: 'center',
     backgroundRepeat: 'no-repeat',
   }}>
    
    <Box id="exercises" sx={{ mt: { lg: '0px',xs:'opx' } }} mt="50px" p="20px">
    
      <Typography variant="h4" fontWeight="bold" sx={{ fontSize: { lg: '44px', xs: '30px' } }} mb="46px" align='center' color='#38333b' fontFamily="Red Hat Display">
         Results
      </Typography>
      
      
      
      <Stack direction="row" sx={{ gap: { lg: '35px', xs: '20px' } }} flexWrap="wrap" justifyContent="center">
        
        {currentExercises.map((exercise, idx) => (
          <ExerciseCard key={idx} exercise={exercise} />
        ))}
        
      </Stack>
      
      
      <Stack sx={{ mt: { lg: '70px', xs: '30px' } }} alignItems="center">
        {exercises.length > 9 && (
          <Pagination
            color="standard"
            shape="rounded"
            defaultPage={1}
            count={Math.ceil(exercises.length / exercisesPerPage)}
            page={currentPage}
            onChange={paginate}
            size="large"
          />
        )}
      </Stack>
    </Box>
    </div>
    </motion.div>
    
  );
};

export default Exercises;
