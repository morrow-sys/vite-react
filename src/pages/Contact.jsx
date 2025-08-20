import React from 'react';
import { Box, Typography, Paper } from '@mui/material';

const Contact = () => {
  return (
    <Box
       id="contact"
  sx={{
    py: 8,
    px: { xs: 2, sm: 3, md: 4 },   // padding по горизонтали адаптивный
    maxWidth: { xs: '90%', sm: 700, md: 900, lg: 1200 },  // адаптивная максимальная ширина
    mx: 'auto',
    textAlign: 'center',
  }}

    >
      <Typography variant="h4" fontWeight="bold" mb={6}>
        Контакты
      </Typography>

      {/* Контейнер с двумя картинками с space-around */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-around', // равномерные отступы вокруг картинок
          mb: 4,
          flexWrap: 'wrap', // чтобы на маленьких экранах красиво переносились
          gap: 2,
        }}
      >
        <Box
          component="img"
          src="/assets/address.jpg"
          alt="Здание офиса 1"
          sx={{
            width: '500px',
            maxWidth: '100%',
            borderRadius: 3,
            boxShadow: 4,
            objectFit: 'cover',
            height: 240,
          }}
        />
        <Box
          component="img"
          src="/assets/map.gif"
          alt="Здание офиса 2"
          sx={{
            width: '500px',
            maxWidth: '100%',
            borderRadius: 3,
            boxShadow: 4,
            objectFit: 'cover',
            height: 240,
          }}
        />
      </Box>

      {/* Блок с адресом — центрируем с margin auto */}
      <Paper
        elevation={3}
        sx={{
          p: 4,
          maxWidth: 500,
          mx: 'auto',  // центрирование блока по горизонтали
          textAlign: 'left',
          mb: 6,
          // borderRadius: 3,
        }}
      >
        <Typography variant="body1" mb={2}>
          <strong>Адрес:</strong> г.Бишкек, ул. Дж.Боконбаева, д.99, этаж 3, каб.33
        </Typography>
        <Typography variant="body1" mb={2}>
          <strong>Телефоны:</strong> +996 (312) 303 297, +996 (312) 303 320
        </Typography>
        <Typography variant="body1" mb={2}>
          <strong>Email:</strong>{' '}
          <a href="mailto:sje.kg.2009@mail.ru" style={{ color: '#1976d2', textDecoration: 'none' }}>
            sje.kg.2009@mail.ru
          </a>
        </Typography>
      </Paper>

      {/* Карта под всем */}
      <Box
        sx={{
          position: 'relative',
          width: '100%',
          height: 0,
          paddingBottom: '56.25%', // 16:9
          borderRadius: 3,
          overflow: 'hidden',
          boxShadow: 4,
        }}
      >
        <iframe
          title="Карта - г.Бишкек, ул. Дж.Боконбаева, д.99"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2924.758907525243!2d74.5817128152539!3d42.871892679153745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389ec8473a51e9bf%3A0xecca4c6503991bbf!2z0JrRg9C70LDQv9C40L3QuNC90LDRjyDQvtCx0LjRgdGM0LrQuNC5LCDQmNCw0YHQtdCy0LDRjywgOTk!5e0!3m2!1sru!2skg!4v1691312345678!5m2!1sru!2skg"
          width="100%"
          height="700px"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </Box>
    </Box>
  );
};

export default Contact;
