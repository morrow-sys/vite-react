import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const AdminHeader = () => {
  const navigate = useNavigate();

  const handleGoToSite = () => {
    window.location.href = '/'; // переход на главную сайта
  };

  const handleLogout = () => {
    // Здесь добавь свою логику выхода (например, очистка токена)
    alert('Вы вышли из админки!');
    navigate('/login'); // перенаправление на страницу логина (замени на свою)
  };

  return (
    <Box
      sx={{
        height: 60,
        backgroundColor: '#1e2a38',
        color: '#eee',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 20px',
      }}
    >
      <Typography variant="h6">Добро пожаловать в админ панель</Typography>

      <Box>
        <Button
          variant="contained"
          color="secondary"
          sx={{ marginRight: 2 }}
          onClick={handleGoToSite}
        >
          На сайт
        </Button>

        <Button variant="outlined" color="#141e28" onClick={handleLogout}>
          Выйти
        </Button>
      </Box>
    </Box>
  );
};

export default AdminHeader;
