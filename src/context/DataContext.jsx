import React, { createContext, useState, useEffect } from 'react';

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const API_URL = "https://6851d70b8612b47a2c0b6424.mockapi.io/blog";

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

  const addPost = async (newPost) => {
    try {
      const res = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newPost),
      });

      const savedPost = await res.json();
      setData((prev) => [...prev, savedPost]);
    } catch (error) {
      console.error("Add post failed:", error);
    }
  };

  const updatePost = async (id, updatedPost) => {
    try {
      const res = await fetch(`${API_URL}/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedPost),
      });
      const updated = await res.json();
      setData((prev) =>
        prev.map((item) => (item.id === id ? updated : item))
      );
    } catch (error) {
      console.error("Update post failed:", error);
    }
  };

  const deletePost = async (id) => {
    try {
      alert('Are you sure to delete this post?') 
      await fetch(`${API_URL}/${id}`, {
        method: 'DELETE',
      });
      setData((prev) => prev.filter((item) => item.id !== id));
    } catch (error) {
      console.error("Delete failed:", error);
    }
  };


  return (
    <DataContext.Provider value={{ data, loading, addPost, updatePost, deletePost }}>
      {children}
    </DataContext.Provider>
  );
};
