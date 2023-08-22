import './App.css';
import {Routes , Route} from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import ExerciseDetail from './pages/ExerciseDetail';
import Footer from './components/Footer';
import React from 'react';
import { Box } from '@mui/material';


const App = () => {
  return (
    <Box  width="400px" sx={{ width: { xl: '1488px' } }} m="auto">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/exercise/:id' element={<ExerciseDetail />} />
      </Routes>
      
    </Box>
  )
}

export default App