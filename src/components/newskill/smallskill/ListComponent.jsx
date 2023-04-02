import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import AddTaskRoundedIcon from '@mui/icons-material/AddTaskRounded';

export default function ListComponent({ skills }) {
  const skillsArray = Object.entries(skills);
  return (
    <Box sx={{ width: '100%', color: '#dadada' }}>
      <List>
        {
          skills && skillsArray.map(skill => (
            <ListItem sx={{py: 0}}>
              <ListItemButton>
                <ListItemIcon>
                  <AddTaskRoundedIcon sx={{ color: "#ffffffdd" }} />
                </ListItemIcon>
                <ListItemText primary={skill[0]} sx={{ color: '#ffffffdd' }} />
              </ListItemButton>
            </ListItem>

          ))
        }
      </List>
    </Box >
  );
}
