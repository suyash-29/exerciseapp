import React from 'react';
import { Stack, Typography } from '@mui/material';
import Icon from '../assets/icons/gym4.png';
import { fadeIn } from '../utils/motion';
import {motion} from 'framer-motion';
import {slideIn,staggerContainer,textVariant,zoomIn,textContainer,textVariant2} from '../utils/motion';


const BodyPart = ({ item, setBodyPart, bodyPart }) => (
  <motion.div
  variants={fadeIn('right', 'spring', item.index * 0.5, 0.75)}>
  <Stack
    type="button"
    alignItems="center"
    justifyContent="center"
    className="bodyPart-card"
    sx={bodyPart === item ? { borderTop: '6px solid ##ffa31d', background: '#fff', borderBottomLeftRadius: '32px',borderTopRightRadius: '32px', width: '160px', height: '220px', cursor: 'pointer', gap: '18px' } : { background: '#fff', borderBottomLeftRadius: '32px',borderTopRightRadius: '32px', width: '160px', height: '220px', cursor: 'pointer', gap: '18px' }}
    onClick={() => {
      setBodyPart(item);
      window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });
    }}
  >
    <img src={Icon} alt="dumbbell" style={{ width: '40px', height: '40px' }} />
    <Typography fontSize="24px" fontWeight="bold" fontFamily="Red Hat Display" color="#3A1212" textTransform="capitalize"> {item}</Typography>
  </Stack>
  </motion.div>
);

export default BodyPart;