import 'react-big-calendar/lib/css/react-big-calendar.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import moment from 'moment';
import { Stack, Fab, Box } from '@mui/material';
import { Add } from '@mui/icons-material';
import ActivitiesCalendar from './ActivitiesCalendar';
import AddActivity from './AddActivity';
import { ActivityProvider } from '../../providers/ActivityProvider';

const getUsers = async () => {
  try {
    const response = await axios.get(
      'https://users-kaderim.apps.pnelwhem.eastus.aroapp.io/'
    );
    console.log(response);
  } catch (error) {
    console.error(error);
  }
};

const getActivities = async () => {
  try {
    const response = await axios.get(
      'https://activities-kaderim.apps.pnelwhem.eastus.aroapp.io/'
    );
    console.log(response);
  } catch (error) {
    console.error(error);
  }
};

const Home = () => {
  const [isAddActivityOpen, setIsAddActivityOpen] = useState(false);

  //@ts-ignore
  useEffect(async () => {
    console.log(await getUsers());
    console.log(await getActivities());
  }, []);

  return (
    <Box
      display='flex'
      flex='1'
      flexDirection='column'
      justifyContent='center'
      alignItems='center'>
      <ActivitiesCalendar />
      <Fab
        color='primary'
        sx={{ alignSelf: 'end', margin: '20px' }}
        onClick={() => setIsAddActivityOpen(true)}>
        <Add />
      </Fab>
      <ActivityProvider>
        <AddActivity
          open={isAddActivityOpen}
          handleClose={() => setIsAddActivityOpen(false)}
        />
      </ActivityProvider>
    </Box>
  );
};

export default Home;
