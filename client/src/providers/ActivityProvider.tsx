import { createContext, useState, useContext, ReactNode } from 'react';

const ActivityContext = createContext({});

export const ActivityProvider = ({ children }) => {
  const [activity, setActivity] = useState({});

  return (
    <ActivityContext.Provider value={{ activity, setActivity }}>
      {children}
    </ActivityContext.Provider>
  );
};

export const useActivity = () => useContext(ActivityContext);
