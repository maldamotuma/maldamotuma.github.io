import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';

const DisplayCurrent = ({ skill }) => {
    const [owidth, setowidth] = useState(0);

    useEffect(() => {
      setowidth('120%');
      setTimeout(() => {
        setowidth(0);
      }, 100);
    }, [skill])
    return (
        <Box sx={{ ml: { xl: 8, lg: 5, md: 2 }, mt: { xl: 13.5, lg: 10.5, md: 5 }, zIndex: 1, position: 'relative' }}>
            <Box sx={{ height: { xl: '10px', lg: '8px' }, width: '100px', bgcolor: '#1F58A3', borderRadius: '20px', boxShadow: 4 }}></Box>
            <Typography variant="h1" component="p" fontSize={{ xl: 55, lg: 45, md: 35 }} fontWeight="bold" fontFamily="Roboto" color="#fff" sx={{
                textShadow: '0 4px 4px #444',
                position: 'relative'
            }}>
                {skill}
                <span style={{
                    position: 'absolute',
                    width: owidth,
                    height: '100%',
                    backgroundColor: '#1F58A3',
                    top: 0,
                    left: 0,
                    transition: owidth === 0 ? '.3s all ease' : '',
                    borderRadius: '5px',
                    boxShadow: '2px solid grey'
                }}></span>
            </Typography>
        </Box>
    )
};

export default DisplayCurrent;
