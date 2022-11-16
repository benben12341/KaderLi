import * as React from 'react';
import dayjs, { Dayjs } from 'dayjs';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { useActivity } from '../../../providers/ActivityProvider';
export default function MaterialUIPickers() {
  const { startTime, setStartTime, endTime, setEndTime } = useActivity();

  const handleStartTimeChange = (newValue: Dayjs | null) => {
    setStartTime(newValue);
  };

  const handleEndTimeChange = (newValue: Dayjs | null) => {
    setEndTime(newValue);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Stack spacing={4} padding={'20px'}>
        <DateTimePicker
          label='זמן התחלה'
          value={startTime}
          onChange={handleStartTimeChange}
          renderInput={params => <TextField {...params} />}
        />
        <DateTimePicker
          label='זמן סיום'
          value={endTime}
          onChange={handleEndTimeChange}
          renderInput={params => <TextField {...params} />}
        />
      </Stack>
    </LocalizationProvider>
  );
}
