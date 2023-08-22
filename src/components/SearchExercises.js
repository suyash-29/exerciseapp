import React, { useEffect, useState } from 'react';
import { Box, Button, Stack, TextField, Typography } from '@mui/material';
import {exerciseOptions,fetchData} from '../utils/fetchData';
import HorizontalScrollbar from './HorizontalScrollbar';
import {motion} from 'framer-motion';
import {slideIn,staggerContainer,textVariant,zoomIn,textContainer,textVariant2} from '../utils/motion';
import bgImage from '../assets/images/search.png'

const TypingText = ({ title }) => (
  <motion.p
  style={{
    color:'white'
  }}
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

const SearchExercises = ({ setExercises, bodyPart, setBodyPart }) => {
  const [search, setSearch] = useState('');
  const [bodyParts, setBodyParts] = useState([]);

  useEffect(() => {
    const fetchExercisesData = async () => {
      const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions);

      setBodyParts(['all', ...bodyPartsData]);
    };

    fetchExercisesData();
  }, []);

  const handleSearch = async () => {
    if (search) {
      const exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);

      const searchedExercises = exercisesData.filter(
        (item) => item.name.toLowerCase().includes(search)
               || item.target.toLowerCase().includes(search)
               || item.equipment.toLowerCase().includes(search)
               || item.bodyPart.toLowerCase().includes(search),
      );

      window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });

      setSearch('');
      setExercises(searchedExercises);
    }
  };

  return (
    <motion.div
    variants= {staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once:false , amount:0.5}}>
    
    <div
   
   style={{
     backgroundImage: `url(${bgImage})`,
     backgroundSize: '100% 100%', // or 'contain'
     backgroundPosition: 'center',
     backgroundRepeat: 'no-repeat',
   }}>
    <Stack alignItems="center" mt="0px" justifyContent="center" p="20px">

      <motion.div
      variants= {staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once:false , amount:0.5}}>


      <Typography fontWeight={700} sx={{ fontSize: { lg: '44px', xs: '30px' } }} mb="49px" textAlign="center" color='#fff'>
      <TypingText title="Awesome Exercises" /> 
      </Typography>
      </motion.div>

      <motion.div
      variants= {staggerContainer, zoomIn(1.4, 1)}
      initial="hidden"
      whileInView="show"
      viewport={{ once:false , amount:0.5}}>
      <Box position="relative" mb="72px"> 
        <TextField height="76px"
          sx={{ input: { fontWeight: '700', border: 'none', borderRadius: '4px' }, width: { lg: '1170px', xs: '350px' }, backgroundColor: '#fff', borderRadius: '20px' }}
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
          placeholder="Search Exercises"
          type="text"
        />
        
        <Button 
        className="search-btn" sx={{ bgcolor: '#FF2625', color: '#fff', textTransform: 'none', width: { lg: '173px', xs: '80px' }, height: '56px', position: 'absolute', right: '0px', fontSize: { lg: '20px', xs: '14px' },borderRadius: '20px' }} onClick={handleSearch}>
          Search
        </Button>
        
      </Box>
      </motion.div>
      
      
      
      <Box sx={{ position: 'relative', width: '100%', p: '20px' }}>
        <HorizontalScrollbar data={bodyParts} bodyParts setBodyPart={setBodyPart} bodyPart={bodyPart} />
      </Box>
    </Stack>
    </div>
    </motion.div>
  );
};

export default SearchExercises;