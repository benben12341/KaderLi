import 'react-big-calendar/lib/css/react-big-calendar.css';
import React, { useEffect, useState } from 'react';
import moment from 'moment';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import { ActivityType } from '../../../../common/types/enums/ActivityType';

const localizer = momentLocalizer(moment);

const activityToEvent = ({ name, startTime, endTime }) => ({
  title: name,
  start: startTime,
  end: endTime
});

const ActivitiesCalendar = () => {
  const [activities, setActivities] = useState([]);
  
  useEffect(() => {
    setActivities(JSON.parse(localStorage.getItem('activities') ?? '[]'));
  },[localStorage.getItem('activities')]);

  return (
  <Calendar
    localizer={localizer}
    events={activities.map(activityToEvent)}
    startAccessor='start'
    endAccessor='end'
    style={{ height: '90%', width: '90%' }}
    rtl={true}
    views={['month']}
  />
)};

export default ActivitiesCalendar;
