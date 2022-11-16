import { createContext, useState, useContext } from 'react';
import dayjs, { Dayjs } from 'dayjs';

const ActivityContext = createContext({});

export const ActivityProvider = ({ children }) => {
  const [gender, setGender] = useState([]);
  const [role, setRole] = useState([]);
  const [location, setLocation] = useState([]);
  const [rank, setRank] = useState([]);
  const [startTime, setStartTime] = useState<Dayjs | null>(
    dayjs('2014-08-18T21:11:54')
  );
  const [endTime, setEndTime] = useState<Dayjs | null>(
    dayjs('2014-08-18T21:11:54')
  );

  return (
    <ActivityContext.Provider
      value={{
        rank,
        setRank,
        location,
        setLocation,
        role,
        setRole,
        setGender,
        gender,
        startTime,
        setStartTime,
        endTime,
        setEndTime
      }}>
      {children}
    </ActivityContext.Provider>
  );
};

export const useActivity = () => useContext(ActivityContext);
