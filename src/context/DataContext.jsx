import React, { createContext, useState, useEffect } from 'react';

// Create the context
export const DataContext = createContext();

// Create the provider component
export const DataProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const API_URL = "https://6851d70b8612b47a2c0b6424.mockapi.io/blog";
//   const API_URL2 = "https://68549c9c6a6ef0ed662f90d7.mockapi.io/User";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(API_URL);
        const json = await res.json();
        setData(json);
      } catch (error) {
        console.error("Failed to fetch:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <DataContext.Provider value={{ data, loading }}>
      {children}
    </DataContext.Provider>
  );
};
