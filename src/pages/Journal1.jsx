import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Journal1 = () => {
  const navigate = useNavigate();
  return (
    <Box sx={{ p: 4, maxWidth: 800, mx: 'auto' }}>
      <Typography variant="h3" fontWeight="bold" mb={2}>
        Журнал 1
      </Typography>
      <Typography variant="body1" mb={4}>
        Здесь можно разместить содержимое первого журнала: статьи, изображения, описание и т.д.
      </Typography>
      <Button variant="contained" onClick={() => navigate(-1)}>
        Назад
      </Button>
    </Box>
  );
};

export default Journal1;
