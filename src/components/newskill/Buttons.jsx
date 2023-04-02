import { Button, Stack } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import leftArrow from '../../assets/svg/leftArrow.svg';
import rightArrow from '../../assets/svg/rightArrow.svg';

const Buttons = ({setskill, skill, skills}) => {
  const [buttonstxt, setbuttonstxt] = useState({l: 1, r: 2});

  const handleNext = () => {
    const btxt = {...buttonstxt};
    const currentskill = skill;
    setskill(btxt.r);
    setbuttonstxt({l: currentskill, r: btxt.l})
  }

  const handleBack = () => {
    const btxt = {...buttonstxt};
    const currentskill = skill;
    setskill(btxt.l);
    setbuttonstxt({l: btxt.r, r: currentskill})
  }
  return (
    <Box sx={{
      position: 'absolute',
      right: 128,
      bottom: 5,
      zIndex: 1

      
    }}>
      <Stack direction="row" spacing={3} justifyContent="end" sx={{}}>
        <Button
        onClick={handleBack}
        variant="contained" sx={{ height: {xl: '40px'}, textTransform: 'none', borderRadius: '10px', fontFamily: 'Roboto', fontSize: {xl: '20px'}, px: 4, fontWeight: 'bold' }}
        startIcon={<Box
          component="img"
          alt=""
          src={leftArrow}
          sx={{
            mr: 1
        }}/>}>{skills[buttonstxt.l]}</Button>
        <Button
        onClick={handleNext}
        variant="contained" sx={{ height: {xl: '40px'}, textTransform: 'none', borderRadius: '10px', fontFamily: 'Roboto', fontSize: {xl: '20px'}, px: 4, fontWeight: 'bold' }}
        endIcon={<Box
          component="img"
          alt=""
          src={rightArrow}
          sx={{
            ml: 1
        }}/>}>{skills[buttonstxt.r]}</Button>
      </Stack>
    </Box>
  )
};

export default Buttons;
