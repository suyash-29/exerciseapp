import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import {motion} from 'framer-motion';
import { footerVariants } from '../utils/motion';
import navbar from '../assets/images/navbar2.png';
import Logo from '../assets/images/Logo3.png';


const Footer = () => (
  <div
  style={{
    backgroundImage: `url(${navbar})`,
    backgroundSize: '100% 100%', // or 'contain'
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  }}>
  
  <Box mt="0px"
  >
    <Stack direction="row" 
       justifyContent='space-around' 
    sx={{ gap: { sm: '122px', xs: '40px' }, mt: { sm: '0px', xs: '0px' },justifyContent:'none' }} px="0px" alignItems="center">
    <Link to="/">
      <img className='logo' src={Logo} alt="logo" style={{ width: '48px', height: '48px', margin: '0px 20px' }} />
    </Link>
    <Stack
      direction="row"
      gap="40px"
      
      fontSize="30px"
      alignItems="center"
      fontFamily="Red Hat Display"
      
      textTransform="capitalize"
    >
      
      <a className='exercises' href="#exercises" style={{ textDecoration: 'none', color: '#fff', fontWeight:'600' }} >PLANET FITNESS</a>
    </Stack>
  </Stack>
  </Box>
  
  </div>
);

export default Footer;