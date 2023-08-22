import React from 'react';
import { Typography, Box, Stack } from '@mui/material';
import Loader from './Loader';
import {motion} from 'framer-motion';
import {slideIn,staggerContainer,textVariant,zoomIn,textContainer,textVariant2} from '../utils/motion';


const ExerciseVideos = ({ exerciseVideos, name }) => {
  if (!exerciseVideos.length) return <Loader />;

  return (

    <motion.div
  variants= {staggerContainer}
  initial="hidden"
  whileInView="show"
  viewport={{ once:false , amount:0.5}}>

    <Box sx={{ marginTop: { lg: '20px', xs: '5px' } }} p="20px">

      <Typography fontFamily="Red Hat Display" sx={{ fontSize: { lg: '44px', xs: '25px' } }} fontWeight={600} color="#38333b" mb="15px">
      <motion.h4
      variants={slideIn('left','tween',0.2,0.8)}>
        Watch <span style={{ color: '#fff', textTransform: 'capitalize' }}>{name}</span> exercise videos
      </motion.h4>
      </Typography>


      <Stack sx={{ flexDirection: { lg: 'row' }, gap: { lg: '50px', xs: '0px' } }} justifyContent="flex-start" flexWrap="wrap" alignItems="center">
        {exerciseVideos?.slice(0, 3)?.map((item, index) => (
          <a
            key={index}
            className="exercise-video"
            href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
            target="_blank"
            rel="noreferrer"
          >
            <img style={{ borderRadius: '24px' }} src={item.video.thumbnails[0].url} alt={item.video.title} />
            <Box>
              <Typography fontFamily="Red Hat Display" sx={{ fontSize: { lg: '28px', xs: '18px' } }} fontWeight={600} color="#38333b">
              <motion.p
                   variants={textVariant(1)}
                  className='title'>
                {item.video.title}
                </motion.p>
              </Typography>
              
              
              <Typography fontSize="14px" color="#38333b">
              <motion.p
             variants={textVariant(1)}
                  className='title'
                    >
                {item.video.channelName}
                </motion.p>
              </Typography>
              
            </Box>
          </a>
        ))}
      </Stack>
    </Box>
    </motion.div>
  );
};

export default ExerciseVideos;