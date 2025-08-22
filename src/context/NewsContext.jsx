// src/context/NewsContext.jsx
import React, { createContext, useState, useContext, useEffect } from 'react';
import axios from 'axios';

const NewsContext = createContext();

export const useNews = () => useContext(NewsContext);

export const NewsProvider = ({ children }) => {
  const [newsItems, setNewsItems] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/news')
      .then(res => setNewsItems(res.data))
      .catch(err => console.error(err));
  }, []);

  const addNews = async (news) => {
    try {
      const res = await axios.post('http://localhost:5000/api/news', news);
      setNewsItems((prev) => [...prev, res.data]);
    } catch (error) {
      console.error('Ошибка при добавлении новости', error);
    }
  };

  return (
    <NewsContext.Provider value={{ newsItems, addNews }}>
      {children}
    </NewsContext.Provider>
  );
};
