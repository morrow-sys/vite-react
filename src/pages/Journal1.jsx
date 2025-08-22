import React from 'react';
import { Box, Typography, Button, Grid, Divider, Link } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Journal1About = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        width: '100%',
        minHeight: '100vh',
        px: { xs: 2, md: 6 },
        py: 6,
        bgcolor: '#fff',
        color: '#222',
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      }}
    >
      {/* Заголовок */}
      <Typography
        variant="h4"
        fontWeight={700}
        gutterBottom
        sx={{ fontFamily: '"Roboto Slab", serif', maxWidth: 1200, mx: 'auto' }}
      >
        Наука, новые технологии и инновации Кыргызстана
      </Typography>

      <Divider sx={{ mb: 3, maxWidth: 1200, mx: 'auto' }} />

      <Grid
        container
        spacing={4}
        sx={{ maxWidth: 1200, mx: 'auto' }}
      >
        {/* Левая колонка — описание журнала */}
        <Grid item xs={12} md={7}>
          <Typography paragraph>
            Журнал «Наука, новые технологии и инновации Кыргызстана» — это ведущий научный
            журнал, посвященный актуальным исследованиям и разработкам в области науки и
            технологий Кыргызстана.
          </Typography>

          <Typography paragraph>
            В изданиях журнала публикуются оригинальные статьи, научные обзоры, рецензии и
            аналитические материалы, которые отражают современное состояние и перспективы
            развития научной мысли в стране.
          </Typography>

          <Typography paragraph>
            Журнал рассчитан на широкий круг читателей: научных сотрудников, аспирантов,
            студентов, а также специалистов из различных отраслей науки и техники.
          </Typography>
        </Grid>

        {/* Правая колонка — редакция */}
        <Grid item xs={12} md={5}>
          <Typography variant="h6" fontWeight="bold" gutterBottom>
            Редакция
          </Typography>

          <Typography>
            Главный редактор:
            <br />
            <Box component="span" fontWeight="bold">
              Иванов Иван Иванович
            </Box>
          </Typography>

          <Typography mt={2}>
            Контакты:
            <br />
            Email: <Link href="mailto:editor@sciencejournal.kg">editor@sciencejournal.kg</Link>
            <br />
            Телефон: +996 (312) 123-456
          </Typography>
        </Grid>
      </Grid>

      <Box textAlign="center" mt={5}>
        <Button
          variant="contained"
          size="large"
          onClick={() => navigate(-1)}
          sx={{ textTransform: 'none', px: 5 }}
        >
          Назад
        </Button>
      </Box>
    </Box>
  );
};

export default Journal1About;
