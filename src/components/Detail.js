import React from 'react';
import { Typography, Stack, Button } from '@mui/material';

import BodyPartImage from '../assets/icons/body-part.png';
import TargetImage from '../assets/icons/target.png';
import EquipmentImage from '../assets/icons/equipment.png';
import {motion} from 'framer-motion';
import {slideIn,staggerContainer,textVariant,zoomIn,textContainer,textVariant2} from '../utils/motion';



const Detail = ({ exerciseDetail }) => {
  const { bodyPart, gifUrl, name, target, equipment } = exerciseDetail;

  const extraDetail = [
    {
      icon: BodyPartImage,
      name: bodyPart,
    },
    {
      icon: TargetImage,
      name: target,
    },
    {
      icon: EquipmentImage,
      name: equipment,
    },
  ];

  return (

  <motion.div
  variants= {staggerContainer}
  initial="hidden"
  whileInView="show"
  viewport={{ once:false , amount:0.5}}>
    <Stack gap="60px" sx={{ flexDirection: { lg: 'row' }, p: '20px', alignItems: 'center' }}>
      <img src={gifUrl} alt={name} loading="lazy" className="detail-image" style={{ borderRadius: '40px' }}/>
      <Stack sx={{ gap: { lg: '35px', xs: '20px' } }}>

      
        <Typography sx={{ fontSize: { lg: '64px', xs: '30px' } }} color="#fff" fontWeight={700} textTransform="capitalize" fontFamily="Red Hat Display">
        <motion.p
              variants={zoomIn(1.5, 1)}>
        {name} 
        </motion.p>
        </Typography>
        

        
        <Typography sx={{ fontSize: { lg: '24px', xs: '18px' } }} color="#38333b" fontFamily="Red Hat Display">
        <motion.h6
      variants={textVariant(1.4)}>
          Exercises keep you strong.{' '}
          <span style={{ textTransform: 'capitalize' }}>{name}</span> bup is one
          of the best <br /> exercises to target your {target}. It will help you improve your{' '}
          <br /> mood and gain energy.
          </motion.h6>
        </Typography>
        
        {extraDetail?.map((item) => (
          <Stack key={item.name} direction="row" gap="24px" alignItems="center">
            <motion.div
                variants={zoomIn(1.5, 1)}>
            <Button sx={{ background: '#fff', borderRadius: '50%', width: '100px', height: '100px' }}>
              <img src={item.icon} alt={bodyPart} style={{ width: '50px', height: '50px' }} />
            </Button>
            </motion.div>
            
            <Typography color="#fff" fontWeight={400} fontFamily="Red Hat Display" textTransform="capitalize" sx={{ fontSize: { lg: '30px', xs: '20px' } }}>
            <motion.p
              variants={zoomIn(1.5, 1)}>
              {item.name}
              </motion.p>
            </Typography>
            
          </Stack>
        
        ))}
      </Stack>
    </Stack>
    </motion.div>
  );
};

export default Detail;