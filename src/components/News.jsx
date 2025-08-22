import React, { useEffect, useState } from 'react';
import { Box, Typography, Grid, Paper } from '@mui/material';

const News = () => {
  const [newsList, setNewsList] = useState([]);

  useEffect(() => {
    const savedNews = JSON.parse(localStorage.getItem('newsList')) || [];
    setNewsList(savedNews);
  }, []);

  return (
    <Box sx={{ py: 10, backgroundColor: '#f5f5f5', textAlign: 'center' }}>
      <Typography variant="h4" fontWeight="bold" mb={4}>
        Новости
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {newsList.length === 0 && <Typography>Новостей пока нет</Typography>}
        {newsList.map((news, index) => (
          <Grid item xs={12} md={4} key={index}>
            <Paper elevation={3} sx={{ p: 4, minHeight: 220 }}>
              <Typography variant="subtitle2" color="textSecondary" sx={{ mb: 1 }}>
                Дата: {news.date}
              </Typography>
              <Typography variant="h6" fontWeight="bold" gutterBottom>
                {news.title.ru}
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ mb: 1 }}>
                {news.description.ru}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default News;
