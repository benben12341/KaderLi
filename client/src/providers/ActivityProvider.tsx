import { createContext, useState, useContext } from 'react';
import dayjs, { Dayjs } from 'dayjs';

const ActivityContext = createContext({});

export const ActivityProvider = ({ children }) => {
  const [gender, setGender] = useState([]);
  const [role, setRole] = useState([]);
  const [location, setLocation] = useState([]);
  const [rank, setRank] = useState([]);
  const [startTime, setStartTime] = useState<Date | null>(
    new Date()
  );
  const [endTime, setEndTime] = useState<Date | null>(
    new Date()
  );
  const [description, setDescription] = useState("");
  const [type, setType] = useState(0);
  const [name, setName] = useState("");

  const reset = () => {
    setGender([]);
    setRole([]);
    setLocation([]);
    setRank([]);
    setStartTime(new Date());
    setEndTime(new Date());
    setDescription('');
    setType(0);
    setName('');
  }

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
        setEndTime,
        description,
        setDescription,
        type,
        setType,
        name,
        setName,
        reset
      }}>
      {children}
    </ActivityContext.Provider>
  );
};

export const useActivity = () => useContext(ActivityContext);
