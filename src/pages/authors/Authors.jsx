// pages/authors/Authors.js
import React from 'react';
import { Container, Typography, Stack, Button } from '@mui/material';
import { Link, Outlet } from 'react-router-dom';

const Authors = () => {
  return (
    <Container sx={{ py: 6 }}>
      <Typography variant="h4" gutterBottom>
        Раздел «Авторам»
      </Typography>

      <Stack spacing={2} direction="column" sx={{ mt: 4, maxWidth: 300 }}>
        <Button component={Link} to="info" variant="outlined" fullWidth>
          Информация
        </Button>
        <Button component={Link} to="requirements" variant="outlined" fullWidth>
          Требования
        </Button>
        <Button component={Link} to="review" variant="outlined" fullWidth>
          Рецензирование
        </Button>
        <Button component={Link} to="application" variant="outlined" fullWidth>
          Заявка
        </Button>
      </Stack>

      {/* Здесь будет рендериться дочерний маршрут */}
      <Outlet />
    </Container>
  );
};

export default Authors;
