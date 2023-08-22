import React from 'react';
import { Link } from 'react-router-dom';
import { Stack } from '@mui/material';
import {motion} from 'framer-motion';
import {navVariants} from '../utils/motion'
import Logo from '../assets/images/Logo3.png';
import './navbar.css';
import bgImage from '../assets/images/navbar3.png'

const Navbar = () => (
  <motion.div
    style={{
      backgroundImage: `url(${bgImage})`,
      backgroundSize: '100% 100%', // or 'contain'
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
    }}>
  <motion.div
  variants={navVariants}
    initial="hidden"
    whileInView="show"
    className='main'>
      <motion.div
   
   >
    
      
  <Stack direction="row" 
       justifyContent='space-around' 
    sx={{ gap: { sm: '122px', xs: '40px' }, mt: { sm: '0px', xs: '0px' },justifyContent:'none' }} px="0px">
    <Link to="/">
      <img className='logo' src={Logo} alt="logo" style={{ width: '48px', height: '48px', margin: '0px 20px' }} />
    </Link>
    <Stack
      direction="row"
      gap="40px"
      
      fontSize="30px"
      alignItems="end"
      fontFamily="Red Hat Display"
      
      textTransform="capitalize"
    >
      <Link className='home' to="/" style={{ textDecoration: 'none',color:"#fff", fontWeight:'600' }} >Home</Link>
      <a className='exercises' href="#exercises" style={{ textDecoration: 'none', color: '#fff', fontWeight:'600' }} >Exercises</a>
    </Stack>
  </Stack>
  </motion.div>
  </motion.div>
  </motion.div>
);

export default Navbar;